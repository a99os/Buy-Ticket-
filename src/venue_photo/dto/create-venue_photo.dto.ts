import { IsNumberString } from 'class-validator';

export class CreateVenuePhotoDto {
  @IsNumberString()
  readonly object_id: number;
}
