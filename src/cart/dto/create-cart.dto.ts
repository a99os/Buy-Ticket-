import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCartDto {
  @IsNumber()
  @IsNotEmpty()
  readonly ticket_id: number;
  @IsNumber()
  @IsNotEmpty()
  readonly customer_id: number;
}
