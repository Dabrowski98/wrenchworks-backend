import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { ServiceRequestCountOrderByAggregateInput } from './service-request-count-order-by-aggregate.input';
import { ServiceRequestAvgOrderByAggregateInput } from './service-request-avg-order-by-aggregate.input';
import { ServiceRequestMaxOrderByAggregateInput } from './service-request-max-order-by-aggregate.input';
import { ServiceRequestMinOrderByAggregateInput } from './service-request-min-order-by-aggregate.input';
import { ServiceRequestSumOrderByAggregateInput } from './service-request-sum-order-by-aggregate.input';

@InputType()
export class ServiceRequestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    serviceRequestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vehicleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requestedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    approvedServiceId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => ServiceRequestCountOrderByAggregateInput, {nullable:true})
    _count?: ServiceRequestCountOrderByAggregateInput;

    @Field(() => ServiceRequestAvgOrderByAggregateInput, {nullable:true})
    _avg?: ServiceRequestAvgOrderByAggregateInput;

    @Field(() => ServiceRequestMaxOrderByAggregateInput, {nullable:true})
    _max?: ServiceRequestMaxOrderByAggregateInput;

    @Field(() => ServiceRequestMinOrderByAggregateInput, {nullable:true})
    _min?: ServiceRequestMinOrderByAggregateInput;

    @Field(() => ServiceRequestSumOrderByAggregateInput, {nullable:true})
    _sum?: ServiceRequestSumOrderByAggregateInput;
}
