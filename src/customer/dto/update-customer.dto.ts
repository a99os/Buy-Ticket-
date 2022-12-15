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
  @IsOptional()
  @IsString()
  readonly first_name: string;
  @IsOptional()
  @IsString()
  readonly last_name: string;
  @IsOptional()
  @Matches(/^998([378]{2}|(9[013-57-9]))\d{7}$/i, {
    message: "phone O'zbekiston raqamiga mos emas",
  })
  readonly phone: string;
  @IsOptional()
  @IsEmail()
  readonly email: string;
  @IsOptional()
  @IsDateString()
  readonly birth_date: Date;
  @IsOptional()
  @IsNumber()
  readonly gender: number;
  @IsOptional()
  @IsNumber()
  readonly lang_id: number;
}

export class UpdatePasswordDto {
  @IsString()
  @IsNotEmpty()
  @Length(6, 32)
  readonly old_password: string;
  @IsString()
  @IsNotEmpty()
  @Length(6, 32)
  readonly password: string;
  @IsString()
  @IsNotEmpty()
  readonly confirm_password: string;
}
export class LoginCustomerDto {
  @IsEmail()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  @Length(6, 32)
  readonly password: string;
}
