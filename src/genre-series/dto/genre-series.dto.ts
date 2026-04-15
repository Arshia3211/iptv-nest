import { IsNumber,IsString,IsOptional,IsArray } from 'class-validator';

export class CreateGenreSeriesDto {
   
  @IsString()
  name!: string;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  genreIds?: number[];

  @IsNumber()
  seriesId!: number;
}

export class UpdateGenreSeriesDto {
  @IsOptional()
  @IsString()
  name?: string;
}


