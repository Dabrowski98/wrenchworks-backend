import { Module } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { BigIntScalar } from './common/scalars/bigint.scalar';
import {
  AddressModule,
  AddressPersonModule,
  AddressWorkshopModule,
  CustomerModule,
  EmployeeModule,
  EmployeeTaskModule,
  JobModule,
  JobCategoryModule,
  PermissionSetModule,
  PersonModule,
  ReviewModule,
  ReviewResponseModule,
  ServiceModule,
  ServiceRequestModule,
  ServiceRequestJobModule,
  TaskModule,
  UserModule,
  UserReportModule,
  VehicleModule,
  VehicleBrandModule,
  VehicleDetailsModule,
  VehicleModelModule,
  WorkshopModule,
  WorkshopDetailsModule,
  WorkshopJobModule,
  WorkshopJobCategoryModule,
} from './modules/index';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
    }),
    AddressModule,
    AddressPersonModule,
    AddressWorkshopModule,
    CustomerModule,
    EmployeeModule,
    EmployeeTaskModule,
    JobModule,
    JobCategoryModule,
    PermissionSetModule,
    PersonModule,
    ReviewModule,
    ReviewResponseModule,
    ServiceModule,
    ServiceRequestModule,
    ServiceRequestJobModule,
    TaskModule,
    UserModule,
    UserReportModule,
    VehicleModule,
    VehicleBrandModule,
    VehicleDetailsModule,
    VehicleModelModule,
    WorkshopModule,
    WorkshopDetailsModule,
    WorkshopJobModule,
    WorkshopJobCategoryModule, 
  ],
  providers: [DatabaseService, BigIntScalar],
})
export class AppModule {}
