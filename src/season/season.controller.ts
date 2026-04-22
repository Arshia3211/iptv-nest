import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeasonService } from './season.service';
import { CreateSeasonDto, UpdateSeasonDto} from './dto/season.dto';


@Controller('season')
export class SeasonController {
  constructor(private readonly seasonService: SeasonService) {}

  @Post()
  create(@Body() createSeasonDto: CreateSeasonDto) {
    return this.seasonService.create(createSeasonDto);
  }

  @Get()
  findAll() {
    return this.seasonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seasonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeasonDto: UpdateSeasonDto) {
    return this.seasonService.update(+id, updateSeasonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seasonService.remove(+id);
  }
}
