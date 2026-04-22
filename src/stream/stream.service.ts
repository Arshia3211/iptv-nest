import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStreamDto , UpdateStreamDto } from './dto/stream.dto';
import { StreamEntity } from './entities/stream.entity';

@Injectable()
export class StreamService {
  constructor(
    @InjectRepository(StreamEntity)
    private streamRepository: Repository<StreamEntity>,
  ) {}

  async create(createStreamDto: CreateStreamDto) {
    const stream = this.streamRepository.create(createStreamDto);
    return await this.streamRepository.save(stream);
  }

  async findAll() {
    return await this.streamRepository.find({ relations: ['genres', 'episodes', 'file'] });
  }

  async findOne(id: number) {
    return await this.streamRepository.findOne({ where: { id }, relations: ['genres', 'episodes', 'file'] });
  }

  async update(id: number, updateStreamDto: UpdateStreamDto) {
    await this.streamRepository.update(id, updateStreamDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.streamRepository.softDelete(id);
    return { message: `Stream #${id} soft deleted` };
  }
}
