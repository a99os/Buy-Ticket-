import { Test, TestingModule } from '@nestjs/testing';
import { VenueTypeController } from './venue_type.controller';
import { VenueTypeService } from './venue_type.service';

describe('VenueTypeController', () => {
  let controller: VenueTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenueTypeController],
      providers: [VenueTypeService],
    }).compile();

    controller = module.get<VenueTypeController>(VenueTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
