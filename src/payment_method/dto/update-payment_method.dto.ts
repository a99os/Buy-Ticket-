import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePayment_MethodDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
