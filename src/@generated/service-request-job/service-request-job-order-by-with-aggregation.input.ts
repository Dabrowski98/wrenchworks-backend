import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ServiceRequestJobCountOrderByAggregateInput } from './service-request-job-count-order-by-aggregate.input';
import { ServiceRequestJobAvgOrderByAggregateInput } from './service-request-job-avg-order-by-aggregate.input';
import { ServiceRequestJobMaxOrderByAggregateInput } from './service-request-job-max-order-by-aggregate.input';
import { ServiceRequestJobMinOrderByAggregateInput } from './service-request-job-min-order-by-aggregate.input';
import { ServiceRequestJobSumOrderByAggregateInput } from './service-request-job-sum-order-by-aggregate.input';

@InputType()
export class ServiceRequestJobOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    serviceRequestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jobId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ServiceRequestJobCountOrderByAggregateInput, {nullable:true})
    _count?: ServiceRequestJobCountOrderByAggregateInput;

    @Field(() => ServiceRequestJobAvgOrderByAggregateInput, {nullable:true})
    _avg?: ServiceRequestJobAvgOrderByAggregateInput;

    @Field(() => ServiceRequestJobMaxOrderByAggregateInput, {nullable:true})
    _max?: ServiceRequestJobMaxOrderByAggregateInput;

    @Field(() => ServiceRequestJobMinOrderByAggregateInput, {nullable:true})
    _min?: ServiceRequestJobMinOrderByAggregateInput;

    @Field(() => ServiceRequestJobSumOrderByAggregateInput, {nullable:true})
    _sum?: ServiceRequestJobSumOrderByAggregateInput;
}
