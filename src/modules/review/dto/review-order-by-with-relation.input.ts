import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { Type } from 'class-transformer';
import { HideField } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../../user/dto/user-order-by-with-relation.input';
import { ValidateNested } from 'class-validator';
import { WorkshopOrderByWithRelationInput } from '../../workshop/dto/workshop-order-by-with-relation.input';
import { ReviewResponseOrderByRelationAggregateInput } from '../../review-response/dto/review-response-order-by-relation-aggregate.input';

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

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    originalRating?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    reviewText?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    originalReviewText?: SortOrderInput;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    @ValidateNested()
    user?: UserOrderByWithRelationInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;

    @Field(() => ReviewResponseOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ReviewResponseOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => ReviewResponseOrderByRelationAggregateInput)
    reviewResponses?: ReviewResponseOrderByRelationAggregateInput;
}
