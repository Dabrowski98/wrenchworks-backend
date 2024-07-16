import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateServiceRequestJobInput {
  @Field(() => BigInt)
  serviceRequestId: bigint;

  @Field(() => BigInt)
  jobId: bigint;

  @Field({ nullable: true })
  createdAt?: Date;
}
