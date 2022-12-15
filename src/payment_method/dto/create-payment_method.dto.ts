import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePayment_MethodDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
