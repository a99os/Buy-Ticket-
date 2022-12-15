import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLangDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}