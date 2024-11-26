import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ReviewResponseOrderByRelationAggregateInput } from './review-response-order-by-relation-aggregate.input';
import { ReviewOrderByWithRelationInput } from '../../review/dto/review-order-by-with-relation.input';
import { ValidateNested } from 'class-validator';
import { UserOrderByWithRelationInput } from '../../user/dto/user-order-by-with-relation.input';

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

    @Field(() => SortOrderInput, {nullable:true})
    originalResponseText?: SortOrderInput;

    @HideField()
    createdAt?: SortOrderInput;

    @HideField()
    updatedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => ReviewResponseOrderByWithRelationInput, {nullable:true})
    @Type(() => ReviewResponseOrderByWithRelationInput)
    parentResponse?: ReviewResponseOrderByWithRelationInput;

    @Field(() => ReviewResponseOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ReviewResponseOrderByRelationAggregateInput)
    childrenResponses?: ReviewResponseOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByWithRelationInput, {nullable:true})
    @Type(() => ReviewOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => ReviewOrderByWithRelationInput)
    review?: ReviewOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;
}
