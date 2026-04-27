import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CreateStreamDto, UpdateStreamDto } from './dto/stream.dto';
import { StreamEntity } from './entities/stream.entity';
import { GenreEntity } from '../genre/entities/genre.entity';

@Injectable()
export class StreamService {
  constructor(
    @InjectRepository(StreamEntity)
    private streamRepository: Repository<StreamEntity>,
    @InjectRepository(GenreEntity)
    private genreRepository: Repository<GenreEntity>,
  ) {}

  async create(createStreamDto: CreateStreamDto) {
    const { genreIds, ...streamData } = createStreamDto;
    
    const stream = this.streamRepository.create(streamData);
    
    if (genreIds && genreIds.length > 0) {
      const genres = await this.genreRepository.find({
        where: { id: In(genreIds) },
      });
      stream.genres = genres;
    }
    
    return await this.streamRepository.save(stream);
  }

  async findAll() {
    return await this.streamRepository.find({
      relations: ['genres', 'episodes', 'file'],
    });
  }

  async findOne(id: number) {
    return await this.streamRepository.findOne({
      where: { id },
      relations: ['genres', 'episodes', 'file'],
    });
  }

  async update(id: number, updateDto: UpdateStreamDto): Promise<StreamEntity> {
    await this.streamRepository.update({ id }, updateDto);
    const updated = await this.streamRepository.findOne({ where: { id } });
    if (!updated) throw new NotFoundException('Stream not found');
    return updated;
  }

  async remove(id: number) {
    await this.streamRepository.softDelete(id);
    return { message: `Stream #${id} soft deleted` };
  }
}
