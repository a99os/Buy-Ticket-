import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCartDto {
  @ApiProperty({ example: 1, description: 'tiket_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly ticket_id: number;
  @ApiProperty({ example: 1, description: 'customer_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly customer_id: number;
  @ApiProperty({ example: 1, description: 'status_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly status_id: number;
}
