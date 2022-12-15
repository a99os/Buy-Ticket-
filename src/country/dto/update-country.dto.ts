import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCountryDto {
  @ApiProperty({ example: 'Uzbekiston', description: 'country name' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
