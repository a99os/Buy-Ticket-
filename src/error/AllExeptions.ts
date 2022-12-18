import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
interface Iexep {
  [key: string]: string;
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: Iexep, host: ArgumentsHost): void {
    try {
      const { httpAdapter } = this.httpAdapterHost;

      const ctx = host.switchToHttp();

      const httpStatus =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;

      console.log(exception);
      // let databaseError: string = null;
      // exception.original.detail
      //   ? (databaseError = exception.original['detail'])
      //   : null;
      const responseBody = {
        message: exception.response || exception.errors,
        statusCode: httpStatus,
        timestamp: new Date().toISOString(),
        path: httpAdapter.getRequestUrl(ctx.getRequest()),
      };

      httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
