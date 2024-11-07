import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReviewResponseCount {

    @Field(() => Int, {nullable:false})
    otherReviewResponses?: number;
}
