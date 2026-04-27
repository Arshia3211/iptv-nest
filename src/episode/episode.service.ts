import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEpisodeDto, UpdateEpisodeDto } from './dto/episode.dto';
import { EpisodeEntity } from './entities/episode.entity';

@Injectable()
export class EpisodeService {
  constructor(
    @InjectRepository(EpisodeEntity)
    private episodeRepository: Repository<EpisodeEntity>,
  ) {}

  async create(createEpisodeDto: CreateEpisodeDto) {
    const episode = this.episodeRepository.create(createEpisodeDto);
    return await this.episodeRepository.save(episode);
  }

  async findAll() {
    return await this.episodeRepository.find({
      relations: ['season', 'file', 'stream'],
    });
  }

  async findOne(id: number) {
    const episode = await this.episodeRepository.findOne({
      where: { id },
      relations: ['season', 'file', 'stream'],
    });
    if (!episode) {
      throw new NotFoundException(`Episode with ID ${id} not found`);
    }
    return episode;
  }

  async update(id: number, updateEpisodeDto: UpdateEpisodeDto) {
    await this.episodeRepository.update(id, updateEpisodeDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.episodeRepository.softDelete(id);
    return { message: `Episode #${id}  deleted` };
  }
}
