import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GenreModule } from './genre/genre.module';
import { GenreSeriesModule } from './genre-series/genre-series.module';
import { SeasonModule } from './season/season.module';
import { SeriesModule } from './series/series.module';
import { StreamModule } from './stream/stream.module';
import { EpisodeModule } from './episode/episode.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [UserModule, GenreModule, GenreSeriesModule, SeasonModule, SeriesModule, StreamModule, EpisodeModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
