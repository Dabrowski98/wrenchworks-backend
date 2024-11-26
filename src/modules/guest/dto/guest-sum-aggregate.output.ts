import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class GuestSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId?: bigint | number;
}
