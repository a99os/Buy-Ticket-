import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from '../files/files.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { Venue_Photo } from './model/venue_photo.model';

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(Venue_Photo) private venuee_photoRepo: typeof Venue_Photo,
    private readonly fileService: FilesService,
  ) {}
  async create(createVenuePhotoDto: CreateVenuePhotoDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const data = await this.venuee_photoRepo.create({
      ...createVenuePhotoDto,
      object_id: +createVenuePhotoDto.object_id,
      url: fileName,
    });
    return data;
  }

  findAll() {
    return this.venuee_photoRepo.findAll({
      include: { all: true },
    });
  }

  findOne(id: number) {
    return this.venuee_photoRepo.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async update(
    id: number,
    updateVenuePhotoDto: UpdateVenuePhotoDto,
    image: any,
  ) {
    const venuePhoto = await this.venuee_photoRepo.findOne({ where: { id } });
    if (!venuePhoto) {
      throw new HttpException('Equipment topilmadi', HttpStatus.NOT_FOUND);
    }
    if (image) {
      await this.fileService.deleteFile(venuePhoto.url);
      venuePhoto.url = await this.fileService.createFile(image);
      console.log(venuePhoto.url);
      await venuePhoto.save();
    }
    if (updateVenuePhotoDto.object_id) {
      return await this.venuee_photoRepo.update(updateVenuePhotoDto, {
        where: { id },
      });
    }
  }

  async remove(id: number) {
    const data = await this.venuee_photoRepo.findOne({ where: { id } });
    if (!data) {
      throw new HttpException('Topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.fileService.deleteFile(data.url);

    return this.venuee_photoRepo.destroy({ where: { id } });
  }
}
