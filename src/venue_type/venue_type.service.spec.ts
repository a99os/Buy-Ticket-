import { Test, TestingModule } from '@nestjs/testing';
import { VenueTypeService } from './venue_type.service';

describe('VenueTypeService', () => {
  let service: VenueTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VenueTypeService],
    }).compile();

    service = module.get<VenueTypeService>(VenueTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
