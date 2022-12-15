import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDiscount_CouponDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
