import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeasonService } from './season.service';
import { SeasonController } from './season.controller';
import { SeasonEntity } from './entities/season.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeasonEntity])],
  controllers: [SeasonController],
  providers: [SeasonService],
})
export class SeasonModule {}
