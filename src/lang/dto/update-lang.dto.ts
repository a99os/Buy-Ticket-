import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateLangDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
