import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { ReviewResponseOrderByRelationAggregateInput } from './review-response-order-by-relation-aggregate.input';
import { ReviewOrderByWithRelationInput } from '../review/review-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class ReviewResponseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    reviewResponseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    parentResponseId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    responseText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    responseDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => ReviewResponseOrderByWithRelationInput, {nullable:true})
    @Type(() => ReviewResponseOrderByWithRelationInput)
    reviewResponse?: ReviewResponseOrderByWithRelationInput;

    @Field(() => ReviewResponseOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ReviewResponseOrderByRelationAggregateInput)
    otherReviewResponses?: ReviewResponseOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByWithRelationInput, {nullable:true})
    @Type(() => ReviewOrderByWithRelationInput)
    review?: ReviewOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;
}
