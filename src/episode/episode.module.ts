import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpisodeService } from './episode.service';
import { EpisodeController } from './episode.controller';
import { EpisodeEntity } from './entities/episode.entity';
import { SeasonEntity } from '../season/entities/season.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EpisodeEntity, SeasonEntity])],
  controllers: [EpisodeController],
  providers: [EpisodeService],
})
export class EpisodeModule {}
