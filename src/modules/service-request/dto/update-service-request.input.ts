import { InputType, Field } from '@nestjs/graphql';
import { ServiceRequestsStatus } from '@prisma/client';

@InputType()
export class UpdateServiceRequestInput {
  @Field(() => BigInt)
  serviceRequestId: bigint;

  @Field(() => BigInt, { nullable: true })
  workshopId?: bigint;

  @Field(() => BigInt, { nullable: true })
  vehicleId?: bigint;

  @Field(() => BigInt, { nullable: true })
  personId?: bigint;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ServiceRequestsStatus, { nullable: true })
  status?: ServiceRequestsStatus;

  @Field(() => BigInt, { nullable: true })
  approvedServiceId?: bigint;

  @Field({ nullable: true })
  deletedAt?: Date;
}
