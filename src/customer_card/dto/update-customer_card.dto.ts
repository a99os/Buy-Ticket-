import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString, Matches } from 'class-validator';

export class UpdateCustomerCardDto {
  @ApiProperty({ example: 1, description: 'customer_id' })
  @IsOptional()
  @IsNumber()
  readonly customer_id: number;
  @ApiProperty({ example: 'QQB', description: 'name' })
  @IsOptional()
  @IsString()
  readonly name: string;
  @ApiProperty({ example: '998993147571', description: 'phone' })
  @IsOptional()
  @Matches(/^998([378]{2}|(9[013-57-9]))\d{7}$/i, {
    message: "phone O'zbekiston raqamiga mos emas",
  })
  @ApiProperty({ example: '1234123412341234', description: 'karta raqami' })
  readonly phone: string;
  @IsOptional()
  @IsString()
  readonly number: string;
  @ApiProperty({ example: '2022', description: 'karta yili' })
  @IsOptional()
  @IsString()
  @ApiProperty({ example: '01', description: 'karta oyi' })
  readonly year: string;
  @IsOptional()
  @IsString()
  readonly month: string;
}
