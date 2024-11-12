import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReviewResponseMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    reviewResponseId?: true;

    @Field(() => Boolean, {nullable:true})
    reviewId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    parentResponseId?: true;

    @Field(() => Boolean, {nullable:true})
    responseText?: true;

    @Field(() => Boolean, {nullable:true})
    responseDate?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;
}
