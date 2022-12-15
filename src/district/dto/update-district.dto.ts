import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDistrictDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
