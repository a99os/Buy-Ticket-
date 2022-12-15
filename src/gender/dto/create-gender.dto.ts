import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenderDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}