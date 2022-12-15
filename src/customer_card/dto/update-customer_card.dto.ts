import { IsOptional, IsNumber, IsString, Matches } from 'class-validator';

export class UpdateCustomerCardDto {
  @IsOptional()
  @IsNumber()
  readonly customer_id: number;
  @IsOptional()
  @IsString()
  readonly name: string;
  @IsOptional()
  @Matches(/^998([378]{2}|(9[013-57-9]))\d{7}$/i, {
    message: "phone O'zbekiston raqamiga mos emas",
  })
  readonly phone: string;
  @IsOptional()
  @IsString()
  readonly number: string;
  @IsOptional()
  @IsString()
  readonly year: string;
  @IsOptional()
  @IsString()
  readonly month: string;
}
