import { Injectable } from '@nestjs/common';
import { CreateGenreSeriesDto , UpdateGenreSeriesDto} from './dto/genre-series.dto';

@Injectable()
export class GenreSeriesService {
  create(createGenreSeriesDto: CreateGenreSeriesDto) {
    return 'This action adds a new genreSeries';
  }

  findAll() {
    return `This action returns all genreSeries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} genreSeries`;
  }

  update(id: number, updateGenreSeriesDto: UpdateGenreSeriesDto) {
    return `This action updates a #${id} genreSeries`;
  }

  remove(id: number) {
    return `This action removes a #${id} genreSeries`;
  }
}
