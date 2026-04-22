import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSeasonDto, UpdateSeasonDto} from './dto/season.dto';
import { SeasonEntity } from './entities/season.entity';

@Injectable()
export class SeasonService {
  constructor(
    @InjectRepository(SeasonEntity)
    private seasonRepository: Repository<SeasonEntity>,
  ) {}

  async create(createSeasonDto: CreateSeasonDto) {
    const season = this.seasonRepository.create(createSeasonDto);
    return await this.seasonRepository.save(season);
  }

  async findAll() {
    return await this.seasonRepository.find({ relations: ['series', 'episodes'] });
  }

  async findOne(id: number) {
    return await this.seasonRepository.findOne({ where: { id }, relations: ['series', 'episodes'] });
  }

  async update(id: number, updateSeasonDto: UpdateSeasonDto) {
    await this.seasonRepository.update(id, updateSeasonDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.seasonRepository.softDelete(id);
    return { message: `Season #${id} soft deleted` };
  }
}
