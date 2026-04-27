import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSeriesDto {
  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  createdById?: number;

  @IsOptional()
  @IsNumber({}, { each: true })
  genreIds?: number[];
}

export class UpdateSeriesDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
