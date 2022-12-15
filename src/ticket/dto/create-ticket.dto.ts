import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTicketDto {
  @ApiProperty({ example: 1, description: 'event_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly event_id: number;
  @ApiProperty({ example: 1, description: 'seat_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly seat_id: number;
  @ApiProperty({ example: '13232332', description: 'seat_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
  @ApiProperty({ example: 1, description: 'event_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly service_fee: number;
  @ApiProperty({ example: 1, description: 'event_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly status_id: number;
  @ApiProperty({ example: 1, description: 'event_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly ticket_type: number;
}
