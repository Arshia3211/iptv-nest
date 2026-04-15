import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGenreDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsOptional()
  @IsArray()
  seriesIds?: number[];

  @IsOptional()
  @IsArray()
  streamIds?: number[];
}

export class UpdateGenreDto {
  @IsOptional()
  @IsString()
  name?: string;
   
  @IsOptional()
  @IsArray()
  seriesIds?: number[];

  @IsOptional()
  @IsArray()
  streamIds?: number[];
}
