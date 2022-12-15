import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { FileInterceptor } from '@nestjs/platform-express';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('Venue_Photo')
@Controller('venue-photo')
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createVenuePhotoDto: CreateVenuePhotoDto,
    @UploadedFile() image,
  ) {
    return this.venuePhotoService.create(createVenuePhotoDto, image);
  }

  @Get()
  findAll() {
    return this.venuePhotoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id') id: string,
    @Body() updateVenuePhotoDto: UpdateVenuePhotoDto,
    @UploadedFile() image,
  ) {
    console.log(updateVenuePhotoDto, image);
    await this.venuePhotoService.update(+id, updateVenuePhotoDto, image);
    return this.venuePhotoService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.venuePhotoService.findOne(+id);
    await this.venuePhotoService.remove(+id);
    return data;
  }
}
