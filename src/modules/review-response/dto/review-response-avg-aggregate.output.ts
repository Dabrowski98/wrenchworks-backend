import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ReviewResponseAvgAggregate {

    @Field(() => Float, {nullable:true})
    reviewResponseId?: number;

    @Field(() => Float, {nullable:true})
    reviewId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    parentResponseId?: number;
}
