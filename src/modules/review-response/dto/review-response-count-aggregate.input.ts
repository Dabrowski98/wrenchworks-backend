import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ReviewResponseCountAggregateInput {

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
    originalResponseText?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
