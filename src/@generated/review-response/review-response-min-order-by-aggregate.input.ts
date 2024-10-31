import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ReviewResponseMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    reviewResponseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parentResponseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    responseText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    responseDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
}
