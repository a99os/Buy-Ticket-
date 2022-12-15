import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const fileName = 'Image-' + uuid.v4().slice(0, 8) + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'images');
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (error) {
      new HttpException(
        'Faylni yozishda xato',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async deleteFile(fileName: string) {
    try {
      const filePath = path.resolve(__dirname, '..', 'images');
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.unlinkSync(path.join(filePath, fileName));
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}
