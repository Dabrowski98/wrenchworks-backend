import { Logger, Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AddressModule, AuthModule } from './modules/index';
import { AppController } from './app.controller';
import { HelperModule } from './common/helper/helper.module';
import { UserModule } from './modules/user/user.module';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { Reflector } from '@nestjs/core';
import { SessionDataModule } from './modules/session-data/session-data.module';
import { GlobalStrictValidationPipe } from './common/validation-pipes/global-strict-validation-pipe';
import { GuestModule } from './modules/guest/guest.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { GqlThrottlerGuard } from './common/guards/gql-throttler.guard';
import { AbilityModule } from './modules/ability/ability.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      fieldResolverEnhancers: ['guards'],
      formatError: (error) => {
        let originalError = error.extensions?.originalError as
          | Error
          | undefined;
        return {
          message: originalError ? originalError.message : error.message,
          code: error.extensions.code,
          status: error.extensions.status,
          errors: error.extensions.errors,
          fields: error.extensions.fields,
        };
      },
    }),
    ThrottlerModule.forRoot([
      {
        ttl: Number(process.env.THROTTLE_TTL),
        limit: Number(process.env.THROTTLE_LIMIT),
        ignoreUserAgents: [/altair/i, /insomnia/i],
      },
    ]),
    // ScheduleModule.forRoot(),
    // CleanupModule,
    PrismaModule,
    HelperModule,
    AuthModule,
    AbilityModule,
    AddressModule,
    GuestModule,
    UserModule,
    SessionDataModule,
  ],
  providers: [
    Logger,
    Reflector,
    { provide: APP_GUARD, useClass: GqlThrottlerGuard },
  ],
  controllers: [AppController],
})
export class AppModule {}
