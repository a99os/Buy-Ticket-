import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTicket_TypeDto {
  @IsOptional()
  @IsString()
  readonly name: string;
  @IsOptional()
  @IsNotEmpty()
  readonly color: string;
}
