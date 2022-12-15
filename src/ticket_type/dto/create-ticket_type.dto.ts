import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTicket_TypeDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly color: string;
}
