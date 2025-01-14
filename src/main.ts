import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { BadRequestException, Logger } from '@nestjs/common';
import { GlobalExceptionFilter } from './common/exception-filters/global-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from './common/custom-errors/errors.config';
import { GlobalStrictValidationPipe } from './common/validation-pipes/global-strict-validation-pipe';
import { GqlThrottlerGuard } from './common/guards/gql-throttler.guard';
import { ThrottlerStorage } from '@nestjs/throttler';
import { Reflector } from '@nestjs/core';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggerInstance = app.get(Logger);
  app.useGlobalFilters(new GlobalExceptionFilter(loggerInstance));
  app.useGlobalPipes(new GlobalStrictValidationPipe());
  app.enableCors({origin: process.env.CORS_ORIGIN}) 
  await app.listen(3000);
  require('json-bigint-patch'); 
}
bootstrap();
