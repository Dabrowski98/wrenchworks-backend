import { Logger, Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AddressModule } from './modules/index';
import { AppController } from './app.controller';
import { HelperModule } from './common/helper.module';
import { GraphQLError } from 'graphql';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './common/exception-filters/http-exception.filter';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: false,

      formatError: (error) => {
        let originalError = error.extensions?.originalError as
          | Error
          | undefined;
        return {
          message: 
          originalError ? originalError.message : 
          error.message,
          code: error.extensions.code,
          status: error.extensions.status,
        };
      },
    }),

    DatabaseModule,
    HelperModule,
    AddressModule,
  ],
  providers: [
    Logger,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter, // Set it as a global filter
    // },
  ],
  controllers: [AppController],
})
export class AppModule {}
