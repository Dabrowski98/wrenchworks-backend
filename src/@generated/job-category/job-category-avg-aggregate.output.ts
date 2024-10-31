import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class JobCategoryAvgAggregate {

    @Field(() => Float, {nullable:true})
    categoryId?: number;

    @Field(() => Float, {nullable:true})
    parentId?: number;
}
