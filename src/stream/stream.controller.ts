import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { StreamService } from './stream.service';
import { CreateStreamDto, UpdateStreamDto } from './dto/stream.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('stream')
export class StreamController {
  constructor(private readonly streamService: StreamService) {}

  @Post()
  create(@Body() createStreamDto: CreateStreamDto) {
    return this.streamService.create(createStreamDto);
  }

  @Get()
  findAll() {
    return this.streamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.streamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStreamDto: UpdateStreamDto) {
    return this.streamService.update(+id, updateStreamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.streamService.remove(+id);
  }
}
