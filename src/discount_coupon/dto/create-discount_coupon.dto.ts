import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDiscount_CouponDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
