import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { ServiceCountOrderByAggregateInput } from './service-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { ServiceAvgOrderByAggregateInput } from './service-avg-order-by-aggregate.input';
import { ServiceMaxOrderByAggregateInput } from './service-max-order-by-aggregate.input';
import { ServiceMinOrderByAggregateInput } from './service-min-order-by-aggregate.input';
import { ServiceSumOrderByAggregateInput } from './service-sum-order-by-aggregate.input';

@InputType()
export class ServiceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    serviceId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    serviceRequestId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vehicleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    payedOff?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serviceStartDate?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    serviceEndDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => ServiceCountOrderByAggregateInput, {nullable:true})
    @Type(() => ServiceCountOrderByAggregateInput)
    _count?: ServiceCountOrderByAggregateInput;

    @Field(() => ServiceAvgOrderByAggregateInput, {nullable:true})
    @Type(() => ServiceAvgOrderByAggregateInput)
    _avg?: ServiceAvgOrderByAggregateInput;

    @Field(() => ServiceMaxOrderByAggregateInput, {nullable:true})
    @Type(() => ServiceMaxOrderByAggregateInput)
    _max?: ServiceMaxOrderByAggregateInput;

    @Field(() => ServiceMinOrderByAggregateInput, {nullable:true})
    @Type(() => ServiceMinOrderByAggregateInput)
    _min?: ServiceMinOrderByAggregateInput;

    @Field(() => ServiceSumOrderByAggregateInput, {nullable:true})
    @Type(() => ServiceSumOrderByAggregateInput)
    _sum?: ServiceSumOrderByAggregateInput;
}
