import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateVehicleInput {
  @Field(() => BigInt)
  personId: bigint;

  @Field()
  brandName: string;

  @Field(() => BigInt)
  modelId: bigint;

  @Field({ nullable: true })
  deletedAt?: Date;
}
