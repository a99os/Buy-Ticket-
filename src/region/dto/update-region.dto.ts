import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRegionDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
