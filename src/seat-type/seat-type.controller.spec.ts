import { Test, TestingModule } from '@nestjs/testing';
import { SeatTypeController } from './seat-type.controller';
import { SeatTypeService } from './seat-type.service';

describe('SeatTypeController', () => {
  let controller: SeatTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeatTypeController],
      providers: [SeatTypeService],
    }).compile();

    controller = module.get<SeatTypeController>(SeatTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
