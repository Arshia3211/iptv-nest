import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { CreateEpisodeDto, UpdateEpisodeDto } from './dto/episode.dto';
@Controller('episode')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Post()
  async create(@Body() createEpisodeDto: CreateEpisodeDto) { if(!createEpisodeDto.seasonId) {
      throw new BadRequestException('seasonId is required');
    }
    return this.episodeService.create(createEpisodeDto);
  }

  @Get()
  findAll() {
    return this.episodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.episodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEpisodeDto: UpdateEpisodeDto) {
    return this.episodeService.update(+id, updateEpisodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.episodeService.remove(+id);
  }
}
