import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReviewResponseAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    reviewResponseId?: true;

    @Field(() => Boolean, {nullable:true})
    reviewId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    parentResponseId?: true;
}
