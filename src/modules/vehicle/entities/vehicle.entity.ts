import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceRequest } from '../../service-request/entities/service-request.entity';
import { Service } from '../../service/entities/service.entity';
import { VehicleBrand } from '../../vehicle-brand/entities/vehicle-brand.entity';
import { VehicleModel } from '../../vehicle-model/entities/vehicle-model.entity';
import { Person } from '../../person/entities/person.entity';
// import { VehicleDetail } from '../../vehicle-details/entities/vehicle-details.entity';

@ObjectType()
export class Vehicle {
  @Field(() => BigInt)
  vehicleId: bigint;

  @Field(() => BigInt)
  personId: bigint;

  @Field()
  brandName: string;

  @Field(() => BigInt)
  modelId: bigint;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field(() => [ServiceRequest])
  vehicleAssociatedServiceRequests: ServiceRequest[];

  @Field(() => [Service])
  services: Service[];

  @Field(() => VehicleBrand)
  vehicleBrand: VehicleBrand;

  @Field(() => VehicleModel)
  vehicleModel: VehicleModel;

  @Field(() => Person)
  person: Person;

  // @Field(() => VehicleDetail, { nullable: true })
  // vehiclesDetails?: VehicleDetails;
}
