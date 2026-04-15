import { Injectable } from '@nestjs/common';
import { CreateGenreDto , UpdateGenreDto} from './dto/genre.dto';


@Injectable()
export class GenreService {
  getAll() {
    throw new Error('Method not implemented.');
  }
  create(createGenreDto: CreateGenreDto) {
    return 'This action adds a new genre';
  }

  findAll() {
    return `This action returns all genre`;
  }

  findOne(id: number) {
    return `This action returns a #${id} genre`;
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return `This action updates a #${id} genre`;
  }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
