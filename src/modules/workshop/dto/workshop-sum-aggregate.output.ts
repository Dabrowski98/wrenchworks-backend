import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class WorkshopSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId?: bigint | number;
}
