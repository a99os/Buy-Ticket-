import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateSeatDto {
  @IsNumber()
  @IsOptional()
  readonly sector: number;
  @IsNumber()
  @IsOptional()
  readonly row_number: number;
  @IsNumber()
  @IsOptional()
  readonly number: number;
  @IsNumber()
  @IsOptional()
  readonly venue_id: number;
  @IsNumber()
  @IsOptional()
  readonly seat_type_id: number;
  @IsString()
  @IsOptional()
  readonly location_in_schema: string;
}
