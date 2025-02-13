import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class JoinWorkshopRequestSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    joinWorkshopRequestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    receiverId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    employeeId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    createdBy?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    updatedBy?: bigint | number;
}
