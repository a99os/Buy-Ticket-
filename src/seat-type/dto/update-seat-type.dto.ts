import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSeatTypeDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
