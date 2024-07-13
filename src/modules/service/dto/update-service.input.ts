import { InputType, Field } from '@nestjs/graphql';
import { ServicesStatus } from '@prisma/client';

@InputType()
export class UpdateServiceInput {
  @Field(() => BigInt)
  serviceId: bigint;

  @Field(() => BigInt, { nullable: true })
  serviceRequestId?: bigint;

  @Field(() => BigInt, { nullable: true })
  workshopId?: bigint;

  @Field(() => BigInt, { nullable: true })
  vehicleId?: bigint;

  @Field(() => BigInt, { nullable: true })
  customerId?: bigint;

  @Field(() => BigInt, { nullable: true })
  employeeId?: bigint;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ServicesStatus, { nullable: true })
  status?: ServicesStatus;

  @Field({ nullable: true })
  payedOff?: boolean;

  @Field({ nullable: true })
  paymentAmount?: number;

  @Field({ nullable: true })
  serviceStartDate?: Date;

  @Field({ nullable: true })
  serviceEndDate?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}
