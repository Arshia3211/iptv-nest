import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenreDto , UpdateGenreDto} from './dto/genre.dto';
import { GenreEntity } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(GenreEntity)
    private genreRepository: Repository<GenreEntity>,
  ) {}

  async getAll() {
    return await this.genreRepository.find({ relations: ['streams', 'genreSeries'] });
  }

  async create(createGenreDto: CreateGenreDto) {
    const genre = this.genreRepository.create(createGenreDto);
    return await this.genreRepository.save(genre);
  }

  async findAll() {
    return await this.genreRepository.find({ relations: ['streams', 'genreSeries'] });
  }

  async findOne(id: number) {
    return await this.genreRepository.findOne({ where: { id }, relations: ['streams', 'genreSeries'] });
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    await this.genreRepository.update(id, updateGenreDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.genreRepository.softDelete(id);
    return { message: `Genre #${id} soft deleted` };
  }
}
