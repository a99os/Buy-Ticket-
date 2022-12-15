import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDelivery_MethodDto {
  @ApiProperty({ example: 'uygacha', description: 'delivery_method' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
