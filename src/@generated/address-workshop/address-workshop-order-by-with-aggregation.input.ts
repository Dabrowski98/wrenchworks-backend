import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AddressWorkshopCountOrderByAggregateInput } from './address-workshop-count-order-by-aggregate.input';
import { AddressWorkshopAvgOrderByAggregateInput } from './address-workshop-avg-order-by-aggregate.input';
import { AddressWorkshopMaxOrderByAggregateInput } from './address-workshop-max-order-by-aggregate.input';
import { AddressWorkshopMinOrderByAggregateInput } from './address-workshop-min-order-by-aggregate.input';
import { AddressWorkshopSumOrderByAggregateInput } from './address-workshop-sum-order-by-aggregate.input';

@InputType()
export class AddressWorkshopOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    addressId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => AddressWorkshopCountOrderByAggregateInput, {nullable:true})
    _count?: AddressWorkshopCountOrderByAggregateInput;

    @Field(() => AddressWorkshopAvgOrderByAggregateInput, {nullable:true})
    _avg?: AddressWorkshopAvgOrderByAggregateInput;

    @Field(() => AddressWorkshopMaxOrderByAggregateInput, {nullable:true})
    _max?: AddressWorkshopMaxOrderByAggregateInput;

    @Field(() => AddressWorkshopMinOrderByAggregateInput, {nullable:true})
    _min?: AddressWorkshopMinOrderByAggregateInput;

    @Field(() => AddressWorkshopSumOrderByAggregateInput, {nullable:true})
    _sum?: AddressWorkshopSumOrderByAggregateInput;
}
