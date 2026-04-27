import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateStreamDto {
  @IsString()
  url!: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  episodeId?: number;

  @IsOptional()
  @IsNumber()
  fileId?: number;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  genreIds?: number[];
}

export class UpdateStreamDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
