import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTicketDto {
  @IsNumber()
  @IsNotEmpty()
  readonly event_id: number;
  @IsNumber()
  @IsNotEmpty()
  readonly seat_id: number;
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  readonly service_fee: number;
  @IsNumber()
  @IsNotEmpty()
  readonly status_id: number;
  @IsNumber()
  @IsNotEmpty()
  readonly ticket_type: number;
}
