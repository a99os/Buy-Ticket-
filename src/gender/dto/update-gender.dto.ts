import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateGenderDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
