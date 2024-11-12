import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { BadRequestException, Logger } from '@nestjs/common';
import { GlobalExceptionFilter } from './common/exception-filters/global-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { CREATE, UPDATE } from './constants/validation-groups';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggerInstance = app.get(Logger);
  app.useGlobalFilters(new GlobalExceptionFilter(loggerInstance));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      enableDebugMessages: true,
      groups: [UPDATE, CREATE],
      exceptionFactory: (errors) => {
        console.log(JSON.stringify(errors, null, 2));
        return new BadRequestException(errors);
      },
    }),
  );
  await app.listen(3000);
  require('json-bigint-patch');
}
bootstrap();
