import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDiscount_CouponDto {
  @ApiProperty({ example: '30%', description: 'chegirma' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
