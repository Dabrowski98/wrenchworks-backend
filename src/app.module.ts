import { Logger, Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AddressModule, AuthModule, EmployeeModule, WorkshopModule } from './modules/index';
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
import { EmployeePermissionModule } from './modules/employee-permission/employee-permission.module';
import { CustomerModule } from './modules/customer/customer.module';
import { JobCategory } from './modules/job-category/dto';
import { JobCategoryModule } from './modules/job-category/job-category.module';
import { JoinWorkshopRequestModule } from './modules/join-workshop-request/join-workshop-request.module';
import { VehicleBrandModule } from './modules/vehicle-brand';
import { WorkshopDeviceOTPModule } from './modules/workshop-device-otp/workshop-device-otp.module';
import { WorkshopDeviceModule } from './modules/workshop-device/workshop-device.module';
import { WorkshopDetailsModule } from './modules/workshop-details/workshop-details.module';
import { TaskModule } from './modules/task/task.module';
import { ServiceRequestModule } from './modules/service-request/service-request.module';
import { ServiceModule } from './modules/service/service.module';
import { ReviewResponseModule } from './modules/review-response/review-response.module';
import { ReviewModule } from './modules/review/review.module';
import { JobModule } from './modules/job/job.module';
import { VehicleModule } from './modules/vehicle';
import { VehicleDetailsModule } from './modules/vehicle-details';
import { VehicleModelModule } from './modules/vehicle-model';

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
    CustomerModule,
    EmployeeModule,
    EmployeePermissionModule,
    GuestModule,
    GuestModule,
    JobModule,
    JobCategoryModule,
    JoinWorkshopRequestModule,
    ReviewModule,
    ReviewResponseModule,
    ServiceModule,
    ServiceRequestModule,
    SessionDataModule,
    TaskModule,
    UserModule,
    VehicleModule,
    VehicleBrandModule,
    VehicleDetailsModule,
    VehicleModelModule,
    WorkshopModule,
    WorkshopDetailsModule,
    WorkshopDeviceModule,
    WorkshopDeviceOTPModule,


  ],
  providers: [
    Logger,
    Reflector,
    { provide: APP_GUARD, useClass: GqlThrottlerGuard },
  ],
  controllers: [AppController],
})
export class AppModule {}
