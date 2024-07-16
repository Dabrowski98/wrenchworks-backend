import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateVehicleInput {
  @Field(() => BigInt)
  vehicleId: bigint;

  @Field({ nullable: true })
  personId?: bigint;

  @Field({ nullable: true })
  brandName?: string;

  @Field({ nullable: true })
  modelId?: bigint;

  @Field({ nullable: true })
  deletedAt?: Date;
}
