import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber } from 'class-validator';

export class UpdateCartDto {
  @ApiProperty({ example: 1, description: 'ticket_id' })
  @IsNumber()
  @IsOptional()
  readonly ticket_id: number;
  @ApiProperty({ example: 1, description: 'customer_id' })
  @IsNumber()
  @IsOptional()
  readonly customer_id: number;
  @ApiProperty({ example: 1, description: 'status_id' })
  @IsNumber()
  @IsOptional()
  readonly status_id: number;
}
