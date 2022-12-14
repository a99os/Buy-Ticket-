import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateVenuePhotoDto {
  @IsNumber()
  @IsNotEmpty()
  readonly object_id: number;
  @IsNotEmpty()
  @IsString()
  readonly url: string;
}
