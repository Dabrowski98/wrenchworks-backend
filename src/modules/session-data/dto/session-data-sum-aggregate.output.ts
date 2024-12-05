import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class SessionDataSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;
}
