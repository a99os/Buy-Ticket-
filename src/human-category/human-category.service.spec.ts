import { Test, TestingModule } from '@nestjs/testing';
import { HumanCategoryService } from './human-category.service';

describe('HumanCategoryService', () => {
  let service: HumanCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HumanCategoryService],
    }).compile();

    service = module.get<HumanCategoryService>(HumanCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
