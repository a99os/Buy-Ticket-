import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCountryDto {
  @ApiProperty({ example: "Uzbekiston", description: 'country name' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
