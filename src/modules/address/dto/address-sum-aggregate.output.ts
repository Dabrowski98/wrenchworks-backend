import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class AddressSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId?: bigint | number;
}
