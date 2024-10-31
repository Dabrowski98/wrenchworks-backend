import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AddressCountOrderByAggregateInput } from './address-count-order-by-aggregate.input';
import { AddressAvgOrderByAggregateInput } from './address-avg-order-by-aggregate.input';
import { AddressMaxOrderByAggregateInput } from './address-max-order-by-aggregate.input';
import { AddressMinOrderByAggregateInput } from './address-min-order-by-aggregate.input';
import { AddressSumOrderByAggregateInput } from './address-sum-order-by-aggregate.input';

@InputType()
export class AddressOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    addressId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    region?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    street?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    buildingNo?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    flatNo?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    postCode?: keyof typeof SortOrder;

    @Field(() => AddressCountOrderByAggregateInput, {nullable:true})
    _count?: AddressCountOrderByAggregateInput;

    @Field(() => AddressAvgOrderByAggregateInput, {nullable:true})
    _avg?: AddressAvgOrderByAggregateInput;

    @Field(() => AddressMaxOrderByAggregateInput, {nullable:true})
    _max?: AddressMaxOrderByAggregateInput;

    @Field(() => AddressMinOrderByAggregateInput, {nullable:true})
    _min?: AddressMinOrderByAggregateInput;

    @Field(() => AddressSumOrderByAggregateInput, {nullable:true})
    _sum?: AddressSumOrderByAggregateInput;
}
