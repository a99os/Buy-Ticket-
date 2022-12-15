import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({ example: 'admin1', description: 'admin nomi' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty({ example: 'adminlogin', description: 'admin logini' })
  @IsString()
  @IsNotEmpty()
  readonly login: string;
  @ApiProperty({ example: '12345', description: 'admin paroli' })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}

export class LoginAdminDto {
  @ApiProperty({ example: 'adminlogin', description: 'admin logini' })
  @IsString()
  @IsNotEmpty()
  readonly login: string;
  @ApiProperty({ example: '12345', description: 'admin paroli' })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
