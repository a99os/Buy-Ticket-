import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCustomer_AddressDto {
  @IsNumber()
  @IsNotEmpty()
  readonly customer_id: number;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  readonly country_id: number;
  @IsNumber()
  @IsNotEmpty()
  readonly region_id: number;
  @IsNumber()
  @IsNotEmpty()
  readonly district_id: number;
  @IsString()
  @IsNotEmpty()
  readonly street: string;
  @IsString()
  @IsNotEmpty()
  readonly house: string;
  @IsNumber()
  @IsNotEmpty()
  readonly flat: number;
  @IsString()
  @IsNotEmpty()
  readonly location: string;
  @IsString()
  @IsNotEmpty()
  readonly post_index: string;
  @IsString()
  @IsNotEmpty()
  readonly info: string;
}
