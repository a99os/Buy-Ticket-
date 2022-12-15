import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class UpdateVenuePhotoDto {
  @IsOptional()
  @IsNumberString()
  readonly object_id: number;
}
