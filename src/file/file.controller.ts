import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto} from './dto/file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { multerOptions } from './multer.config';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file', multerOptions))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return { message: 'No file uploaded' };
    }
    return this.fileService.saveFile(file);
  }

  @Post()
  create(@Body() createFileDto: CreateFileDto) {
    return this.fileService.create(createFileDto);
  }

  @Get()
  findAll() {
    return this.fileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileService.remove(+id);
  }
}
