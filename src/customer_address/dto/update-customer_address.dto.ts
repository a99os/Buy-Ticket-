import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateCustomer_AddressDto {
  @IsNumber()
  @IsOptional()
  readonly customer_id: number;
  @IsString()
  @IsOptional()
  readonly name: string;
  @IsNumber()
  @IsOptional()
  readonly country_id: number;
  @IsNumber()
  @IsOptional()
  readonly region_id: number;
  @IsNumber()
  @IsOptional()
  readonly district_id: number;
  @IsString()
  @IsOptional()
  readonly street: string;
  @IsString()
  @IsOptional()
  readonly house: string;
  @IsNumber()
  @IsOptional()
  readonly flat: number;
  @IsString()
  @IsOptional()
  readonly location: string;
  @IsString()
  @IsOptional()
  readonly post_index: string;
  @IsString()
  @IsOptional()
  readonly info: string;
}
