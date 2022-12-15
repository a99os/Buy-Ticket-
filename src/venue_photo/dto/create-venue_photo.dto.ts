import { IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';

export class CreateVenuePhotoDto {
  @Matches(/^[0-9]/i, { message: 'object_id must be number' })
  readonly object_id: number;
}
