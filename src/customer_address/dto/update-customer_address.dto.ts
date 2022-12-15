import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateCustomer_AddressDto {
  @ApiProperty({ example: 1, description: 'customer_id' })
  @IsNumber()
  @IsOptional()
  readonly customer_id: number;
  @ApiProperty({ example: 'Home', description: 'address name' })
  @IsString()
  @IsOptional()
  readonly name: string;
  @ApiProperty({ example: 1, description: 'country_id' })
  @IsNumber()
  @IsOptional()
  readonly country_id: number;
  @ApiProperty({ example: 1, description: 'region_id' })
  @IsNumber()
  @IsOptional()
  readonly region_id: number;
  @ApiProperty({ example: 1, description: 'district_id' })
  @IsNumber()
  @IsOptional()
  readonly district_id: number;
  @ApiProperty({ example: 'backstreet', description: 'street' })
  @IsString()
  @IsOptional()
  readonly street: string;
  @ApiProperty({ example: '13A', description: 'house' })
  @IsString()
  @IsOptional()
  readonly house: string;
  @ApiProperty({ example: 1, description: 'flat' })
  @IsNumber()
  @IsOptional()
  readonly flat: number;
  @ApiProperty({ example: 'dfghjfghj.map', description: 'location' })
  @IsString()
  @IsOptional()
  readonly location: string;
  @ApiProperty({ example: 12343, description: 'postindex' })
  @IsString()
  @IsOptional()
  readonly post_index: string;
  @ApiProperty({ example: "Bu uy haqida ma'lumot", description: 'info' })
  @IsString()
  @IsOptional()
  readonly info: string;
}
