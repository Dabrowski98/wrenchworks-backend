import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { GuestCountOrderByAggregateInput } from './guest-count-order-by-aggregate.input';
import { GuestAvgOrderByAggregateInput } from './guest-avg-order-by-aggregate.input';
import { GuestMaxOrderByAggregateInput } from './guest-max-order-by-aggregate.input';
import { GuestMinOrderByAggregateInput } from './guest-min-order-by-aggregate.input';
import { GuestSumOrderByAggregateInput } from './guest-sum-order-by-aggregate.input';

@InputType()
export class GuestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    guestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    telephoneNumber?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    NIP?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    companyName?: SortOrderInput;

    @Field(() => GuestCountOrderByAggregateInput, {nullable:true})
    _count?: GuestCountOrderByAggregateInput;

    @Field(() => GuestAvgOrderByAggregateInput, {nullable:true})
    _avg?: GuestAvgOrderByAggregateInput;

    @Field(() => GuestMaxOrderByAggregateInput, {nullable:true})
    _max?: GuestMaxOrderByAggregateInput;

    @Field(() => GuestMinOrderByAggregateInput, {nullable:true})
    _min?: GuestMinOrderByAggregateInput;

    @Field(() => GuestSumOrderByAggregateInput, {nullable:true})
    _sum?: GuestSumOrderByAggregateInput;
}
