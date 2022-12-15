import {
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  Matches,
} from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsDateString()
  @IsNotEmpty()
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
  @IsString()
  @IsNotEmpty()
  readonly info: string;
  @IsNumberString()
  readonly event_type_id: number;
  @IsNumberString()
  readonly human_category_id: number;
  @IsNumberString()
  readonly venue_id: number;
  @IsNumberString()
  readonly lang_id: number;
  @IsDateString()
  readonly release_date: Date;
}
