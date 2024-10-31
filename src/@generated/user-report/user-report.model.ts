import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { UserReportsReportedType } from '../prisma/user-reports-reported-type.enum';
import { UserReportsStatus } from '../prisma/user-reports-status.enum';
import { User } from '../user/user.model';

@ObjectType()
export class UserReport {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reportId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint;

    @Field(() => String, {nullable:false})
    reportText!: string;

    @Field(() => UserReportsReportedType, {nullable:false})
    reportedType!: keyof typeof UserReportsReportedType;

    @Field(() => String, {nullable:false})
    reportedId!: bigint;

    @Field(() => UserReportsStatus, {nullable:false,defaultValue:'pending'})
    status!: keyof typeof UserReportsStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => User, {nullable:false})
    user?: User;
}
