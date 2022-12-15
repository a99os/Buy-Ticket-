import { IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';

export class CreateCustomerCardDto {
  @IsNumber()
  @IsNotEmpty()
  readonly customer_id: number;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @Matches(/^998([378]{2}|(9[013-57-9]))\d{7}$/i, {
    message: "phone O'zbekiston raqamiga mos emas",
  })
  readonly phone: string;
  @IsString()
  @IsNotEmpty()
  readonly number: string;
  @IsString()
  @IsNotEmpty()
  readonly year: string;
  @IsString()
  @IsNotEmpty()
  readonly month: string;
}
