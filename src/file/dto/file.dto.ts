import { IsString, IsOptional } from 'class-validator';

export class CreateFileDto {
  @IsString()
  filename!: string;

  @IsString()
  fileType!: string;

  @IsString()
  url!: string;
}

export class UpdateFileDto {
  @IsOptional()
  @IsString()
  filename?: string;

  @IsOptional()
  @IsString()
  fileType?: string;

  @IsOptional()
  @IsString()
  url?: string;
}



