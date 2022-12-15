import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './error/AllExeptions';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 3030;

    const app = await NestFactory.create(AppModule);
    const adapterHost = app.get(HttpAdapterHost);

    app.use(cookieParser());

    app.useGlobalFilters(new AllExceptionsFilter(adapterHost));
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
      .setTitle('My Ticket')
      .setDescription('REST API')
      .setVersion('1.0.0')
      .addTag('NodeJS, NestJS, Postgres, Sequelize')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/docs', app, document);
    await app.listen(PORT, () => {
      console.log('SERVER LISTEN TO PORT-->>' + PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
