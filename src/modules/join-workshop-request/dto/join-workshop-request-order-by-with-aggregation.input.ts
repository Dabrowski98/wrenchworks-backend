import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from 'nestjs-graphql';
import { JoinWorkshopRequestCountOrderByAggregateInput } from './join-workshop-request-count-order-by-aggregate.input';
import { JoinWorkshopRequestAvgOrderByAggregateInput } from './join-workshop-request-avg-order-by-aggregate.input';
import { JoinWorkshopRequestMaxOrderByAggregateInput } from './join-workshop-request-max-order-by-aggregate.input';
import { JoinWorkshopRequestMinOrderByAggregateInput } from './join-workshop-request-min-order-by-aggregate.input';
import { JoinWorkshopRequestSumOrderByAggregateInput } from './join-workshop-request-sum-order-by-aggregate.input';

@InputType()
export class JoinWorkshopRequestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    joinWorkshopRequestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    receiverId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    message?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    createdBy?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    updatedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    updatedBy?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    resolvedAt?: SortOrderInput;

    @Field(() => JoinWorkshopRequestCountOrderByAggregateInput, {nullable:true})
    _count?: JoinWorkshopRequestCountOrderByAggregateInput;

    @Field(() => JoinWorkshopRequestAvgOrderByAggregateInput, {nullable:true})
    _avg?: JoinWorkshopRequestAvgOrderByAggregateInput;

    @Field(() => JoinWorkshopRequestMaxOrderByAggregateInput, {nullable:true})
    _max?: JoinWorkshopRequestMaxOrderByAggregateInput;

    @Field(() => JoinWorkshopRequestMinOrderByAggregateInput, {nullable:true})
    _min?: JoinWorkshopRequestMinOrderByAggregateInput;

    @Field(() => JoinWorkshopRequestSumOrderByAggregateInput, {nullable:true})
    _sum?: JoinWorkshopRequestSumOrderByAggregateInput;
}
