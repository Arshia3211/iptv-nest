import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamService } from './stream.service';
import { StreamController } from './stream.controller';
import { StreamEntity } from './entities/stream.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StreamEntity])],
  controllers: [StreamController],
  providers: [StreamService],
})
export class StreamModule {}
