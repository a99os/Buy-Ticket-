import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCountryDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
