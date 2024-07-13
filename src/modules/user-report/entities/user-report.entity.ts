import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { UserReportsReportedType, UserReportsStatus } from '@prisma/client';

@ObjectType()
export class UserReport {
  @Field(() => BigInt)
  reportId: bigint;

  @Field(() => BigInt)
  userId: bigint;

  @Field()
  reportText: string;

  @Field(() => UserReportsReportedType)
  reportedType: UserReportsReportedType;

  @Field(() => BigInt)
  reportedId: bigint;

  @Field(() => UserReportsStatus)
  status: UserReportsStatus;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => User)
  user: User;
}

registerEnumType(UserReportsStatus, {
  name: 'UserReportsStatus',
});

registerEnumType(UserReportsReportedType, {
  name: 'UserReportsReportedType',
});
