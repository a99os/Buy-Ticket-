import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDistrictDto {
  @ApiProperty({ example: '30%', description: 'chegirma' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
