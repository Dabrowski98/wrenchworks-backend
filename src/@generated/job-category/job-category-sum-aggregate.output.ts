import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class JobCategorySumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    categoryId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    parentId?: bigint | number;
}
