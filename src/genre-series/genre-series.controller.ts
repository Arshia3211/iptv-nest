import { Controller, Get, Post, Body, Patch,Put, Param, Delete } from '@nestjs/common';
import { GenreSeriesService } from './genre-series.service';
import { CreateGenreSeriesDto , UpdateGenreSeriesDto } from './dto/genre-series.dto';

@Controller('genreSeries')
export class GenreSeriesController {
  constructor(private readonly genreSeriesService: GenreSeriesService) {}

  @Post()
  create(@Body() createGenreSeriesDto: CreateGenreSeriesDto) {
    return this.genreSeriesService.create(createGenreSeriesDto);
  }

  @Get()
  findAll() {
    return this.genreSeriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genreSeriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenreSeriesDto: UpdateGenreSeriesDto) {
    return this.genreSeriesService.update(+id, updateGenreSeriesDto);
  }

  @Put(':id')
  replace(
    @Param('id') id: number,
    @Body() updateGenreSeriesDto: UpdateGenreSeriesDto,
  ) {
    return this.genreSeriesService.update(id, updateGenreSeriesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genreSeriesService.remove(+id);
  }
}
