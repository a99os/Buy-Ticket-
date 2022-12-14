import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsNumber()
  @IsNotEmpty()
  readonly card_id: number;
  @IsDateString()
  @IsNotEmpty()
  readonly finished: Date;
  @IsNumber()
  @IsNotEmpty()
  readonly payment_method_id: number;
  @IsNumber()
  @IsNotEmpty()
  readonly delivery_method_id: number;
  @IsNumber()
  @IsNotEmpty()
  readonly discount_cupon_id: number;
  @IsNumber()
  @IsNotEmpty()
  readonly status_id: number;
}
