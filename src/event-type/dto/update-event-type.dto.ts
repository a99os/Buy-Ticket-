import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEventTypeDto {
  @IsOptional()
  @IsString()
  readonly name: string;
  @IsOptional()
  @IsNumber()
  readonly parent_event_type_id: number;
}