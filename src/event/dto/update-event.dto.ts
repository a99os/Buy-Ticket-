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
  @IsString()
  readonly photo: string;
  @IsOptional()
  @IsDateString()
  readonly start_date: Date;
  @IsString()
  @IsMilitaryTime({
    message: 'start_time must be a valid time in format HH24:MM',
  })
  readonly start_time: string;
  @IsDateString()
  readonly finish_date: Date;
  @IsString()
  @IsMilitaryTime({
    message: 'finish_time must be a valid time in format HH24:MM',
  })
  readonly finish_time: string;
  @IsOptional()
  @IsString()
  readonly info: string;
  @IsNumber()
  readonly event_type_id: number;
  @IsNumber()
  readonly human_category_id: number;
  @IsNumber()
  readonly venue_id: number;
  @IsNumber()
  readonly lang_id: number;
  @IsDateString()
  readonly release_date: Date;
}
