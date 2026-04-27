import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/file.dto';
import { FileEntity } from './entities/file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>,
  ) {}

  async saveFile(file: Express.Multer.File) {
    const fileData = {
      filename: file.originalname,
      path: file.path,
      mimetype: file.mimetype,
      size: file.size,
    };
    const newFile = this.fileRepository.create(fileData);
    return await this.fileRepository.save(newFile);
  }

  async create(createFileDto: CreateFileDto) {
    const file = this.fileRepository.create(createFileDto);
    return await this.fileRepository.save(file);
  }

  async findAll() {
    return await this.fileRepository.find({ relations: ['episodes', 'streams'] });
  }

  async findOne(id: number) {
    const file = await this.fileRepository.findOne({
      where: { id },
      relations: ['episodes', 'streams'],
    });
    if (!file) {
      throw new NotFoundException(`File with ID ${id} not found`);
    }
    return file;
  }
  async remove(id: number) {
    await this.fileRepository.softDelete(id);
    return { message: `File #${id}  deleted` };
  }
}
