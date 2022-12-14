import { IsDateString, IsOptional, IsNumber } from 'class-validator';

export class UpdateBookingDto {
  @IsNumber()
  @IsOptional()
  readonly card_id: number;
  @IsDateString()
  @IsOptional()
  readonly finished: Date;
  @IsNumber()
  @IsOptional()
  readonly payment_method_id: number;
  @IsNumber()
  @IsOptional()
  readonly delivery_method_id: number;
  @IsNumber()
  @IsOptional()
  readonly discount_coupon_id: number;
  @IsNumber()
  @IsOptional()
  readonly status_id: number;
}
