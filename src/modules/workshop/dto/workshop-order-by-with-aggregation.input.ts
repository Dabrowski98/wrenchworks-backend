import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { WorkshopCountOrderByAggregateInput } from './workshop-count-order-by-aggregate.input';
import { WorkshopAvgOrderByAggregateInput } from './workshop-avg-order-by-aggregate.input';
import { WorkshopMaxOrderByAggregateInput } from './workshop-max-order-by-aggregate.input';
import { WorkshopMinOrderByAggregateInput } from './workshop-min-order-by-aggregate.input';
import { WorkshopSumOrderByAggregateInput } from './workshop-sum-order-by-aggregate.input';

@InputType()
export class WorkshopOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    addressId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    isVerified?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    isManagingWork?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => WorkshopCountOrderByAggregateInput, {nullable:true})
    _count?: WorkshopCountOrderByAggregateInput;

    @Field(() => WorkshopAvgOrderByAggregateInput, {nullable:true})
    _avg?: WorkshopAvgOrderByAggregateInput;

    @Field(() => WorkshopMaxOrderByAggregateInput, {nullable:true})
    _max?: WorkshopMaxOrderByAggregateInput;

    @Field(() => WorkshopMinOrderByAggregateInput, {nullable:true})
    _min?: WorkshopMinOrderByAggregateInput;

    @Field(() => WorkshopSumOrderByAggregateInput, {nullable:true})
    _sum?: WorkshopSumOrderByAggregateInput;
}