import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AddressPersonCountOrderByAggregateInput } from './address-person-count-order-by-aggregate.input';
import { AddressPersonAvgOrderByAggregateInput } from './address-person-avg-order-by-aggregate.input';
import { AddressPersonMaxOrderByAggregateInput } from './address-person-max-order-by-aggregate.input';
import { AddressPersonMinOrderByAggregateInput } from './address-person-min-order-by-aggregate.input';
import { AddressPersonSumOrderByAggregateInput } from './address-person-sum-order-by-aggregate.input';

@InputType()
export class AddressPersonOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    addressId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => AddressPersonCountOrderByAggregateInput, {nullable:true})
    _count?: AddressPersonCountOrderByAggregateInput;

    @Field(() => AddressPersonAvgOrderByAggregateInput, {nullable:true})
    _avg?: AddressPersonAvgOrderByAggregateInput;

    @Field(() => AddressPersonMaxOrderByAggregateInput, {nullable:true})
    _max?: AddressPersonMaxOrderByAggregateInput;

    @Field(() => AddressPersonMinOrderByAggregateInput, {nullable:true})
    _min?: AddressPersonMinOrderByAggregateInput;

    @Field(() => AddressPersonSumOrderByAggregateInput, {nullable:true})
    _sum?: AddressPersonSumOrderByAggregateInput;
}
