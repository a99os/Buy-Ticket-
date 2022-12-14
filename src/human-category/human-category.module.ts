import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HumanCategoryController } from './human-category.controller';
import { HumanCategoryService } from './human-category.service';
import { Human_Category } from './model/human-category.model';

@Module({
  imports: [SequelizeModule.forFeature([Human_Category])],

  controllers: [HumanCategoryController],
  providers: [HumanCategoryService],
})
export class HumanCategoryModule {}