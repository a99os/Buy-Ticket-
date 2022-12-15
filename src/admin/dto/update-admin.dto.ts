import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAdminDto {
  @ApiProperty({ example: 'user1', description: 'admin nomi' })
  @IsOptional()
  @IsString()
  readonly name: string;
  @ApiProperty({ example: 'login12345', description: 'admin logini' })
  @IsOptional()
  @IsString()
  readonly login: string;
  @ApiProperty({ example: '12345', description: 'admin paroli' })
  @IsOptional()
  @IsString()
  password: string;
}
