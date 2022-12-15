import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly first_name: string;
  @IsString()
  @IsNotEmpty()
  readonly last_name: string;
  @Matches(/^998([378]{2}|(9[013-57-9]))\d{7}$/i, {
    message: "phone O'zbekiston raqamiga mos emas",
  })
  readonly phone: string;
  @IsString()
  @IsNotEmpty()
  @Length(6, 32)
  readonly password: string;
  @IsString()
  @IsNotEmpty()
  readonly confirm_password: string;
  @IsEmail()
  readonly email: string;
  @IsOptional()
  @IsDateString()
  readonly birth_date: Date;
  @IsOptional()
  @IsNumber()
  readonly gender_id: number;
  @IsNumber()
  @IsNotEmpty()
  readonly lang_id: number;
}
