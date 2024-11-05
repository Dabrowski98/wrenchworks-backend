import { Logger, Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AddressModule, PersonModule } from './modules/index';
import { AppController } from './app.controller';
import { HelperModule } from './common/helper/helper.module';

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
          message: originalError ? originalError.message : error.message,
          code: error.extensions.code,
          status: error.extensions.status,
        };
      },
    }),

    PrismaModule,
    HelperModule,
    AddressModule,
    PersonModule,
  ],
  providers: [Logger],
  controllers: [AppController],
})
export class AppModule {}
