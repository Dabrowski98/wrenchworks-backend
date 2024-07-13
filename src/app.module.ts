import { Module } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/users/user.module';
import { join } from 'path';
import { VehicleBrandsModule } from './modules/vehicle-brands/vehicle-brand.module';
import { VehicleModelsModule } from './modules/vehicle-models/vehicle-model.module';
import { BigIntScalar } from './common/scalars/bigint.scalar';
import { PersonModule } from './modules/persons/person.module';
import { WorkshopModule } from './modules/workshops/workshop.module';
import { CustomerModule } from './modules/customers/customer.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UserModule,
    VehicleBrandsModule,
    VehicleModelsModule,
    PersonModule,
    WorkshopModule,
    CustomerModule,
  ],
  providers: [DatabaseService, BigIntScalar],
})
export class AppModule {}
