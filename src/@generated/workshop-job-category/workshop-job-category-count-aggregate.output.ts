import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WorkshopJobCategoryCountAggregate {

    @Field(() => Int, {nullable:false})
    workshopId!: number;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
