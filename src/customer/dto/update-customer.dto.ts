import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsString,
  Length,
  Matches,
  Max,
} from 'class-validator';

export class UpdateCustomerDto {
  @ApiProperty({ example: 'Abbos', description: 'firstname' })
  @IsOptional()
  @IsString()
  readonly first_name: string;
  @ApiProperty({ example: 'Ashirboyev', description: 'lastname' })
  @IsOptional()
  @IsString()
  readonly last_name: string;
  @ApiProperty({ example: '998993147571', description: 'phone' })
  @IsOptional()
  @Matches(/^998([378]{2}|(9[013-57-9]))\d{7}$/i, {
    message: "phone O'zbekiston raqamiga mos emas",
  })
  readonly phone: string;
  @ApiProperty({ example: 'abbos@gmail.com', description: 'email' })
  @IsOptional()
  @IsEmail()
  readonly email: string;
  @ApiProperty({ example: '1999-10-29', description: 'bithday' })
  @IsOptional()
  @IsDateString()
  readonly birth_date: Date;
  @ApiProperty({ example: 1, description: 'gender_id' })
  @IsOptional()
  @IsNumber()
  readonly gender_id: number;

  @ApiProperty({ example: 1, description: 'lang_id' })
  @IsOptional()
  @IsNumber()
  readonly lang_id: number;
}

export class UpdatePasswordDto {
  @ApiProperty({ example: '123456', description: 'old password' })
  @IsString()
  @IsNotEmpty()
  @Length(6, 32)
  readonly old_password: string;
  @ApiProperty({ example: 'qwerty', description: 'new password' })
  @IsString()
  @IsNotEmpty()
  @Length(6, 32)
  readonly password: string;
  @ApiProperty({ example: 'qwerty', description: 'confirm new password' })
  @IsString()
  @IsNotEmpty()
  readonly confirm_password: string;
}
export class LoginCustomerDto {
  @ApiProperty({ example: 'abbos@gmail.com', description: 'email' })
  @IsEmail()
  readonly email: string;
  @ApiProperty({ example: '123456', description: 'password' })
  @IsString()
  @IsNotEmpty()
  @Length(6, 32)
  readonly password: string;
}
