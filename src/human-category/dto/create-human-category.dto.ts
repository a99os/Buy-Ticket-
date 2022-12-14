import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHumanCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  readonly start_age: number;
  @IsNumber()
  @IsNotEmpty()
  readonly finish_age: number;
  @IsNumber()
  @IsNotEmpty()
  readonly gender: number;
}
