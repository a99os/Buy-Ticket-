import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsNumber } from 'class-validator';

export class UpdateBookingDto {
  @ApiProperty({ example: 1, description: 'card_id' })
  @IsNumber()
  @IsOptional()
  readonly card_id: number;
  @ApiProperty({ example: '2022-12-01', description: 'tugagan vaqti' })
  @IsDateString()
  @IsOptional()
  readonly finished: Date;
  @ApiProperty({ example: 1, description: 'payment_method' })
  @IsNumber()
  @IsOptional()
  readonly payment_method_id: number;
  @ApiProperty({ example: 1, description: 'delivery_method' })
  @IsNumber()
  @IsOptional()
  readonly delivery_method_id: number;
  @ApiProperty({ example: 1, description: 'discount_coupon' })
  @IsNumber()
  @IsOptional()
  readonly discount_coupon_id: number;
  @ApiProperty({ example: 1, description: 'status' })
  @IsNumber()
  @IsOptional()
  readonly status_id: number;
}
