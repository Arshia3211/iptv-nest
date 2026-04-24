import { IsNumber, IsOptional , IsString,} from "class-validator";

export class CreateSeriesDto {
  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  genreId!: number;

  @IsNumber()
  genreIds!: number[];
}

export class UpdateSeriesDto {
  @IsOptional()
  @IsString()
  title?: string; 
}
