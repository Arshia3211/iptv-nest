import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileDto, UpdateFileDto } from './dto/file.dto';

import { FileEntity } from './entities/file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>,
  ) {}

  async create(createFileDto: CreateFileDto) {
    const file = this.fileRepository.create(createFileDto);
    return await this.fileRepository.save(file);
  }

  async findAll() {
    return await this.fileRepository.find({ relations: ['episodes', 'streams'] });
  }

  async findOne(id: number) {
    return await this.fileRepository.findOne({ where: { id }, relations: ['episodes', 'streams'] });
  }

  async update(id: number, updateFileDto: UpdateFileDto) {
    await this.fileRepository.update(id, updateFileDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.fileRepository.softDelete(id);
    return { message: `File #${id} soft deleted` };
  }
}
