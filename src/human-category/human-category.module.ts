import { Module } from '@nestjs/common';
import { HumanCategoryService } from './human-category.service';
import { HumanCategoryController } from './human-category.controller';

@Module({
  controllers: [HumanCategoryController],
  providers: [HumanCategoryService]
})
export class HumanCategoryModule {}
