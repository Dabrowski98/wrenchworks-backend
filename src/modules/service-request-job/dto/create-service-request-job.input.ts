import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceRequestJobInput {
  @Field(() => BigInt)
  serviceRequestId: bigint;

  @Field(() => BigInt)
  jobId: bigint;
}
