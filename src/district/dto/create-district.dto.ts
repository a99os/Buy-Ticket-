import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDistrictDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
