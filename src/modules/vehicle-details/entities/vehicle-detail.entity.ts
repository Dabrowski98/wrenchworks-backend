import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Vehicle } from '../../vehicle/entities/vehicle.entity';

@ObjectType()
export class VehicleDetails {

  @Field(() => BigInt)
  vehicleId: bigint;
  
  @Field(() => Int, { nullable: true })
  yearOfProduction?: number;

  @Field({ nullable: true })
  VIN?: string;

  @Field({ nullable: true })
  engineCapacity?: string;

  @Field({ nullable: true })
  licensePlate?: string;

  @Field({ nullable: true })
  fuelType?: string;

  @Field({ nullable: true })
  engineNo?: string;

  @Field({ nullable: true })
  bodyColor?: string;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => Vehicle)
  vehicle: Vehicle;
}
