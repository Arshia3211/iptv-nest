import { Module } from '@nestjs/common';
import { GenreSeriesService } from './genre-series.service';
import { GenreSeriesController } from './genre-series.controller';

@Module({
  controllers: [GenreSeriesController],
  providers: [GenreSeriesService],
})
export class GenreSeriesModule {}
