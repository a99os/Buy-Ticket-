import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
} from 'class-validator';

export class CreateVenueDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly address: string;
  @IsString()
  @IsNotEmpty()
  readonly location: string;
  @IsString()
  @IsNotEmpty()
  readonly site: string;
  @Matches(/^998([378]{2}|(9[013-57-9]))\d{7}$/i, {
    message: "phone O'zbekiston raqamiga mos emas",
  })
  readonly phone: string;
  @IsArray()
  @IsNotEmpty()
  readonly venue_type: number[];
  @IsString()
  @IsNotEmpty()
  readonly schema: string;
  @IsNumber()
  @IsNotEmpty()
  readonly region_id: number;
  @IsNumber()
  @IsNotEmpty()
  readonly district_id: number;
}
