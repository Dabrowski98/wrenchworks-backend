import { Logger, Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AddressModule, AuthModule } from './modules/index';
import { AppController } from './app.controller';
import { HelperModule } from './common/helper/helper.module';
import { UserModule } from './modules/user/user.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CleanupModule } from './common/cleanup/cleanup.module';
import { APP_GUARD } from '@nestjs/core';
import { Reflector } from '@nestjs/core';
import { RolesGuard } from './modules/auth/auth-common-guards';
import { UserJwtAuthGuard } from './modules/auth/user-auth/guards/user-jwt-auth.guard';
import { EmployeeJwtAuthGuard } from './modules/auth/workshop-auth/guards/user-jwt-auth.guard';

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
          errors: error.extensions.errors,
        };
      },
    }),
    // ScheduleModule.forRoot(),
    // CleanupModule,
    PrismaModule,
    HelperModule,
    AuthModule,
    AddressModule,
    UserModule,
  ],
  providers: [
    Logger,
    Reflector,
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
  controllers: [AppController],
})
export class AppModule {}
