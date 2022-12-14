import { IsOptional, IsNumber } from 'class-validator';

export class UpdateCartDto {
  @IsNumber()
  @IsOptional()
  readonly ticket_id: number;
  @IsNumber()
  @IsOptional()
  readonly customer_id: number;
}
