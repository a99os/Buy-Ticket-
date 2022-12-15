import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCustomer_AddressDto {
  @ApiProperty({ example: 1, description: 'customer_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly customer_id: number;
  @ApiProperty({ example: 'Home', description: 'address name' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty({ example: 1, description: 'country_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly country_id: number;
  @ApiProperty({ example: 1, description: 'region_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly region_id: number;
  @ApiProperty({ example: 1, description: 'district_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly district_id: number;
  @ApiProperty({ example: 'backstreet', description: 'street' })
  @IsString()
  @IsNotEmpty()
  readonly street: string;
  @ApiProperty({ example: '13A', description: 'house' })
  @IsString()
  @IsNotEmpty()
  readonly house: string;
  @ApiProperty({ example: 1, description: 'flat' })
  @IsNumber()
  @IsNotEmpty()
  readonly flat: number;
  @ApiProperty({ example: 'dfghjfghj.map', description: 'location' })
  @IsString()
  @IsNotEmpty()
  readonly location: string;
  @ApiProperty({ example: 12343, description: 'postindex' })
  @IsString()
  @IsNotEmpty()
  readonly post_index: string;
  @ApiProperty({ example: "Bu uy haqida ma'lumot", description: 'info' })
  @IsString()
  @IsNotEmpty()
  readonly info: string;
}
