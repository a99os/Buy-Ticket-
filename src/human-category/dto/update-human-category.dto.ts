import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateHumanCategoryDto {
  @IsOptional()
  @IsString()
  readonly name: string;
  @IsOptional()
  @IsNumber()
  readonly start_age: number;
  @IsOptional()
  @IsNumber()
  readonly finish_age: number;
  @IsOptional()
  @IsNumber()
  readonly gender: number;
}
