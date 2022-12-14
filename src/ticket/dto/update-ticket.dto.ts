import { IsOptional, IsNumber } from 'class-validator';

export class UpdateTicketDto {
  @IsOptional()
  @IsNumber()
  readonly event_id: number;
  @IsOptional()
  @IsNumber()
  readonly seat_id: number;
  @IsOptional()
  @IsNumber()
  readonly price: number;
  @IsOptional()
  @IsNumber()
  readonly service_fee: number;
  @IsOptional()
  @IsNumber()
  readonly status: number;
  @IsOptional()
  @IsNumber()
  readonly ticket_type: number;
}
