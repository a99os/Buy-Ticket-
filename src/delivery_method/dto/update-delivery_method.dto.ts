import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDelivery_MethodDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
