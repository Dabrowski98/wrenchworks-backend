import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { SessionDataCountOrderByAggregateInput } from './session-data-count-order-by-aggregate.input';
import { SessionDataAvgOrderByAggregateInput } from './session-data-avg-order-by-aggregate.input';
import { SessionDataMaxOrderByAggregateInput } from './session-data-max-order-by-aggregate.input';
import { SessionDataMinOrderByAggregateInput } from './session-data-min-order-by-aggregate.input';
import { SessionDataSumOrderByAggregateInput } from './session-data-sum-order-by-aggregate.input';

@InputType()
export class SessionDataOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    sessionDataId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    refreshToken?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    deviceInfo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ipAddress?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    issuedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    revoked?: keyof typeof SortOrder;

    @Field(() => SessionDataCountOrderByAggregateInput, {nullable:true})
    _count?: SessionDataCountOrderByAggregateInput;

    @Field(() => SessionDataAvgOrderByAggregateInput, {nullable:true})
    _avg?: SessionDataAvgOrderByAggregateInput;

    @Field(() => SessionDataMaxOrderByAggregateInput, {nullable:true})
    _max?: SessionDataMaxOrderByAggregateInput;

    @Field(() => SessionDataMinOrderByAggregateInput, {nullable:true})
    _min?: SessionDataMinOrderByAggregateInput;

    @Field(() => SessionDataSumOrderByAggregateInput, {nullable:true})
    _sum?: SessionDataSumOrderByAggregateInput;
}
