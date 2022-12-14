import { IsOptional, IsNumber, IsString } from 'class-validator';

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
  @IsString()
  readonly phone: string;
  @IsOptional()
  @IsNumber()
  readonly venue_type_id: number;
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
