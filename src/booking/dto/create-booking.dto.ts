import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({ example: 1, description: 'card_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly card_id: number;
  @ApiProperty({ example: '2022-12-01', description: 'tugagan vaqti' })
  @IsDateString()
  @IsNotEmpty()
  readonly finished: Date;
  @ApiProperty({ example: 1, description: 'payment_method' })
  @IsNumber()
  @IsNotEmpty()
  readonly payment_method_id: number;
  @ApiProperty({ example: 1, description: 'delivery_method' })
  @IsNumber()
  @IsNotEmpty()
  readonly delivery_method_id: number;
  @ApiProperty({ example: 1, description: 'discount_coupon' })
  @IsNumber()
  @IsNotEmpty()
  readonly discount_cupon_id: number;
  @ApiProperty({ example: 1, description: 'status' })
  @IsNumber()
  @IsNotEmpty()
  readonly status_id: number;
}
