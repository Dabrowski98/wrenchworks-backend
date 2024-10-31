import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { UserReportsReportedType } from '../prisma/user-reports-reported-type.enum';
import { UserReportsStatus } from '../prisma/user-reports-status.enum';

@ObjectType()
export class UserReportMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reportId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => String, {nullable:true})
    reportText?: string;

    @Field(() => UserReportsReportedType, {nullable:true})
    reportedType?: keyof typeof UserReportsReportedType;

    @Field(() => String, {nullable:true})
    reportedId?: bigint | number;

    @Field(() => UserReportsStatus, {nullable:true})
    status?: keyof typeof UserReportsStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
