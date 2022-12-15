import {
  IsOptional,
  IsNumber,
  IsString,
  Matches,
  IsArray,
} from 'class-validator';

export class UpdateVenueDto {
  @IsOptional()
  @IsString()
  readonly name: string;
  @IsOptional()
  @IsString()
  readonly address: string;
  @IsOptional()
  @IsString()
  readonly location: string;
  @IsOptional()
  @IsString()
  readonly site: string;
  @IsOptional()
  @Matches(/^998([378]{2}|(9[013-57-9]))\d{7}$/i, {
    message: "phone O'zbekiston raqamiga mos emas",
  })
  readonly phone: string;
  @IsOptional()
  @IsArray()
  readonly venue_type: number[];
  @IsOptional()
  @IsString()
  readonly schema: string;
  @IsOptional()
  @IsNumber()
  readonly region_id: number;
  @IsOptional()
  @IsNumber()
  readonly district_id: number;
}
