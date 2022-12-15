import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
} from 'class-validator';

export class CreateVenueDto {
  @ApiProperty({ example: 'venue', description: 'nomi' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty({ example: 'drujba', description: 'nomi' })
  @IsString()
  @IsNotEmpty()
  readonly address: string;
  @ApiProperty({ example: 'venue.map', description: 'nomi' })
  @IsString()
  @IsNotEmpty()
  readonly location: string;
  @ApiProperty({ example: 'www.kun.com', description: 'nomi' })
  @IsString()
  @IsNotEmpty()
  readonly site: string;
  @ApiProperty({ example: '998993147571', description: 'phone' })
  @Matches(/^998([378]{2}|(9[013-57-9]))\d{7}$/i, {
    message: "phone O'zbekiston raqamiga mos emas",
  })
  readonly phone: string;
  @ApiProperty({ example: 1, description: 'venue_type' })
  @IsArray()
  @IsNotEmpty()
  readonly venue_type: number[];
  @ApiProperty({ example: '1,2', description: 'schema' })
  @IsString()
  @IsNotEmpty()
  readonly schema: string;
  @ApiProperty({ example: 1, description: 'region_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly region_id: number;
  @ApiProperty({ example: 1, description: 'district_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly district_id: number;
}
