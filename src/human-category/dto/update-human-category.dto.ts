import { PartialType } from '@nestjs/mapped-types';
import { CreateHumanCategoryDto } from './create-human-category.dto';

export class UpdateHumanCategoryDto extends PartialType(CreateHumanCategoryDto) {}
