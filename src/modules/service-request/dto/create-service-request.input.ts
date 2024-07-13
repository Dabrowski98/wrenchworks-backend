import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceRequestInput {
  @Field(() => BigInt)
  workshopId: bigint;

  @Field(() => BigInt)
  vehicleId: bigint;

  @Field(() => BigInt)
  personId: bigint;

  @Field({ nullable: true })
  description?: string;
}
