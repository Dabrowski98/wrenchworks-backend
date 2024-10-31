import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class PersonSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId?: bigint | number;
}
