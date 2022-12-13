import { Test, TestingModule } from '@nestjs/testing';
import { HumanCategoryController } from './human-category.controller';
import { HumanCategoryService } from './human-category.service';

describe('HumanCategoryController', () => {
  let controller: HumanCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HumanCategoryController],
      providers: [HumanCategoryService],
    }).compile();

    controller = module.get<HumanCategoryController>(HumanCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
