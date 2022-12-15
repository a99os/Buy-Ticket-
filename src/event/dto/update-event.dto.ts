import {
  IsDateString,
  IsOptional,
  IsMilitaryTime,
  IsNumber,
  IsString,
} from 'class-validator';

export class UpdateEventDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsDateString()
  readonly start_date: Date;
  @IsOptional()
  @IsString()
  @IsMilitaryTime({
    message: 'start_time must be a valid time in format HH24:MM',
  })
  readonly start_time: string;
  @IsOptional()
  @IsDateString()
  readonly finish_date: Date;
  @IsOptional()
  @IsString()
  @IsMilitaryTime({
    message: 'finish_time must be a valid time in format HH24:MM',
  })
  readonly finish_time: string;
  @IsOptional()
  @IsString()
  readonly info: string;
  @IsOptional()
  readonly event_type_id: number;
  @IsOptional()
  readonly human_category_id: number;
  @IsOptional()
  readonly venue_id: number;
  @IsOptional()
  readonly lang_id: number;
  @IsOptional()
  @IsDateString()
  readonly release_date: Date;
}
