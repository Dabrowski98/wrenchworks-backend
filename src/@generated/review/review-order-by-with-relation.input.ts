import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { WorkshopOrderByWithRelationInput } from '../workshop/workshop-order-by-with-relation.input';
import { ReviewResponseOrderByRelationAggregateInput } from '../review-response/review-response-order-by-relation-aggregate.input';

@InputType()
export class ReviewOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;

    @Field(() => ReviewResponseOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ReviewResponseOrderByRelationAggregateInput)
    reviewResponses?: ReviewResponseOrderByRelationAggregateInput;
}
