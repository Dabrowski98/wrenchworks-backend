import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class UserReportSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reportId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reportedId?: bigint | number;

    @Field(() => String, {nullable:true})
    updatedBy?: bigint | number;
}
