import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateVenueTypeDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
