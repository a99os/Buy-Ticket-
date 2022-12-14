import { Module } from '@nestjs/common';
import { HumanCategoryController } from './human-category.controller';
import { HumanCategoryService } from './human-category.service';

@Module({
  controllers: [HumanCategoryController],
  providers: [HumanCategoryService],
})
export class HumanCategoryModule {}
