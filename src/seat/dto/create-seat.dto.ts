import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSeatDto {
  @IsNumber()
  @IsNotEmpty()
  readonly sector: number;
  @IsNumber()
  @IsNotEmpty()
  readonly row_number: number;
  @IsNumber()
  @IsNotEmpty()
  readonly number: number;
  @IsNumber()
  @IsNotEmpty()
  readonly venue_id: number;
  @IsNumber()
  @IsNotEmpty()
  readonly seat_type_id: number;
  @IsString()
  @IsNotEmpty()
  readonly location_in_schema: string;
}
