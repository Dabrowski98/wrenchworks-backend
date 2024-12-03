import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { BadRequestException, Logger } from '@nestjs/common';
import { GlobalExceptionFilter } from './common/exception-filters/global-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from './common/custom-errors/errors.config';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggerInstance = app.get(Logger);
  app.useGlobalFilters(new GlobalExceptionFilter(loggerInstance));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      enableDebugMessages: true,
      exceptionFactory: (errors) => {
        const validationErrors = errors.map((error) => ({
          property: error.property,
          constraints: Object.values(error.constraints),
        }));
        return new ValidationError(validationErrors);
      },
    }),
  );
  await app.listen(3000);
  require('json-bigint-patch');
}
bootstrap();
