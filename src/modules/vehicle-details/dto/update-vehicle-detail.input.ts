import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateVehicleDetailsInput {
  
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
}
