import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenreSeriesDto, UpdateGenreSeriesDto } from './dto/genre-series.dto';
import { GenreSeriesEntity } from './entities/genre-series.entity';

@Injectable()
export class GenreSeriesService {
  constructor(
    @InjectRepository(GenreSeriesEntity)
    private genreSeriesRepository: Repository<GenreSeriesEntity>,
  ) {}

  async create(createGenreSeriesDto: CreateGenreSeriesDto) {
    const genreSeries = this.genreSeriesRepository.create(createGenreSeriesDto);
    return await this.genreSeriesRepository.save(genreSeries);
  }

  async findAll() {
    return await this.genreSeriesRepository.find({ relations: ['genres', 'series'] });
  }

  async findOne(id: number) {
    return await this.genreSeriesRepository.findOne({ where: { id }, relations: ['genres', 'series'] });
  }

  async update(id: number, updateGenreSeriesDto: UpdateGenreSeriesDto) {
    await this.genreSeriesRepository.update(id, updateGenreSeriesDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.genreSeriesRepository.softDelete(id);
    return { message: `GenreSeries #${id} soft deleted` };
  }
}
