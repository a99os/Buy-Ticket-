import { PartialType } from '@nestjs/mapped-types';
import { CreateSeatTypeDto } from './create-seat-type.dto';

export class UpdateSeatTypeDto extends PartialType(CreateSeatTypeDto) {}
