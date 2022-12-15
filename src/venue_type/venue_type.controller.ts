import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Venue_Type')
@Controller('venue_type')
export class VenueTypeController {
  constructor(private readonly venue_typeService: VenueTypeService) {}

  @Post()
  create(@Body() createVenue_TypeDto: CreateVenueTypeDto) {
    return this.venue_typeService.create(createVenue_TypeDto);
  }

  @Get()
  findAll() {
    return this.venue_typeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venue_typeService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVenue_TypeDto: UpdateVenueTypeDto,
  ) {
    await this.venue_typeService.update(+id, updateVenue_TypeDto);
    return this.venue_typeService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const venue_type = await this.venue_typeService.findOne(+id);
    await this.venue_typeService.remove(+id);
    return venue_type;
  }
}
