import { InputType, Field } from '@nestjs/graphql';
import { UserReportsReportedType, UserReportsStatus } from '@prisma/client';

@InputType()
export class UpdateUserReportInput {
  @Field(() => BigInt)
  reportId: bigint;

  @Field({ nullable: true })
  reportText?: string;

  @Field(() => UserReportsReportedType, { nullable: true })
  reportedType?: UserReportsReportedType;

  @Field(() => BigInt, { nullable: true })
  reportedId?: bigint;

  @Field(() => UserReportsStatus, { nullable: true })
  status?: UserReportsStatus;

  @Field({ nullable: true })
  updatedAt?: Date;
}
