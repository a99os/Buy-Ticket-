import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Status')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @Get()
  findAll() {
    return this.statusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    await this.statusService.update(+id, updateStatusDto);
    return this.statusService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const status = await this.statusService.findOne(+id);
    await this.statusService.remove(+id);
    return status;
  }
}
