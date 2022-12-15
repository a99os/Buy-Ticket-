import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDelivery_MethodDto {
  @ApiProperty({ example: 'uygacha', description: 'delivery_method' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
