import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateStatusDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
