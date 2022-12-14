import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
  @IsString()
  @IsNotEmpty()
  readonly phone: string;
  @IsNumber()
  @IsNotEmpty()
  readonly venue_type_id: number;
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
