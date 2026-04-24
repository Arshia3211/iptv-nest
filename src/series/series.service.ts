import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSeriesDto , UpdateSeriesDto } from './dto/series.dto';
import { SeriesEntity } from './entities/series.entity';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(SeriesEntity)
    private seriesRepository: Repository<SeriesEntity>,
  ) {}

  async create(createSeriesDto: CreateSeriesDto) {
    const series = this.seriesRepository.create(createSeriesDto);
    return await this.seriesRepository.save(series);
  }

async findAll() {
    return await this.seriesRepository.find({ relations: ['createdBy'] });
  }

  async findOne(id: number) {
    return await this.seriesRepository.findOne({ where: { id }, relations: ['createdBy'] });
  }

  async update(id: number, updateSeriesDto: UpdateSeriesDto) {
    await this.seriesRepository.update(id, updateSeriesDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.seriesRepository.softDelete(id);
    return { message: `Series #${id} soft deleted` };
  }
}
