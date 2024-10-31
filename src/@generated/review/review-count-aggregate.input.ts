import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReviewCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    reviewId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    rating?: true;

    @Field(() => Boolean, {nullable:true})
    reviewText?: true;

    @Field(() => Boolean, {nullable:true})
    reviewDate?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
