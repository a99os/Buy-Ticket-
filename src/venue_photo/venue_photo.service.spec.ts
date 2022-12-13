import { Test, TestingModule } from '@nestjs/testing';
import { VenuePhotoService } from './venue_photo.service';

describe('VenuePhotoService', () => {
  let service: VenuePhotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VenuePhotoService],
    }).compile();

    service = module.get<VenuePhotoService>(VenuePhotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
