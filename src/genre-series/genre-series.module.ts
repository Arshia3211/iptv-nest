import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreSeriesService } from './genre-series.service';
import { GenreSeriesController } from './genre-series.controller';
import { GenreSeriesEntity } from './entities/genre-series.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GenreSeriesEntity])],
  controllers: [GenreSeriesController],
  providers: [GenreSeriesService],
})
export class GenreSeriesModule {}
