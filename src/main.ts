import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import './common/utils/defineBigInt';
import { GlobalExceptionFilter } from './common/exception-filters/http-exception.filter';
import { Logger } from '@nestjs/common';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggerInstance = app.get(Logger);
  app.useGlobalFilters(new GlobalExceptionFilter(loggerInstance));
  await app.listen(3000);
  require('json-bigint-patch');
}
bootstrap();
