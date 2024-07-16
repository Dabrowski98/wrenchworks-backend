import { InputType, Field } from '@nestjs/graphql';
import { UserReportsReportedType, UserReportsStatus } from '@prisma/client';

@InputType()
export class CreateUserReportInput {
  @Field(() => BigInt)
  userId: bigint;

  @Field()
  reportText: string;

  @Field(() => UserReportsReportedType)
  reportedType: UserReportsReportedType;

  @Field(() => BigInt)
  reportedId: bigint;
}
