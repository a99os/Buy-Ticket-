import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber } from 'class-validator';

export class UpdateTicketDto {
  @ApiProperty({ example: 1, description: 'event_id' })
  @IsOptional()
  @IsNumber()
  readonly event_id: number;
  @ApiProperty({ example: 1, description: 'seat_id' })
  @IsOptional()
  @IsNumber()
  readonly seat_id: number;
  @ApiProperty({ example: 100000, description: 'price' })
  @IsOptional()
  @IsNumber()
  readonly price: number;
  @ApiProperty({ example: 15000, description: 'service_fee' })
  @IsOptional()
  @IsNumber()
  readonly service_fee: number;
  @ApiProperty({ example: 1, description: 'status_id' })
  @IsOptional()
  @IsNumber()
  readonly status_id: number;
  @ApiProperty({ example: 1, description: 'ticket_type' })
  @IsOptional()
  @IsNumber()
  readonly ticket_type: number;
}
