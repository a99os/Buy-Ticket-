import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDelivery_MethodDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
