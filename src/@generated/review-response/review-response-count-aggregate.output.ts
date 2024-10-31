import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReviewResponseCountAggregate {

    @Field(() => Int, {nullable:false})
    reviewResponseId!: number;

    @Field(() => Int, {nullable:false})
    reviewId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    parentResponseId!: number;

    @Field(() => Int, {nullable:false})
    responseText!: number;

    @Field(() => Int, {nullable:false})
    responseDate!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
