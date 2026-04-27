import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSeasonDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  seriesId!: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  number!: number;

  @IsOptional()
  @IsString()
  title?: string;
}

export class UpdateSeasonDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  seriesId?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  number?: number;

  @IsOptional()
  @IsString()
  title?: string;
}