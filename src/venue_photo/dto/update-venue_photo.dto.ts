import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class UpdateVenuePhotoDto {
  @IsOptional()
  @Matches(/^[0-9]/i, { message: 'object_id must be number' })
  readonly object_id: number;
}
