import { InputType, Field } from '@nestjs/graphql';
import { ServicesStatus } from '@prisma/client';

@InputType()
export class CreateServiceInput {
  @Field(() => BigInt)
  serviceRequestId?: bigint;

  @Field(() => BigInt)
  workshopId: bigint;

  @Field(() => BigInt)
  vehicleId: bigint;

  @Field(() => BigInt)
  customerId: bigint;

  @Field(() => BigInt)
  employeeId: bigint;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ServicesStatus)
  status: ServicesStatus;

  @Field()
  payedOff: boolean;

  @Field()
  paymentAmount: number;

  @Field()
  serviceStartDate: Date;

  @Field({ nullable: true })
  serviceEndDate?: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}
