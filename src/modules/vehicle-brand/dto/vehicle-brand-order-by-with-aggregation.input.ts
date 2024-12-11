import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { VehicleBrandCountOrderByAggregateInput } from './vehicle-brand-count-order-by-aggregate.input';
import { VehicleBrandMaxOrderByAggregateInput } from './vehicle-brand-max-order-by-aggregate.input';
import { VehicleBrandMinOrderByAggregateInput } from './vehicle-brand-min-order-by-aggregate.input';

@InputType()
export class VehicleBrandOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    brandName?: keyof typeof SortOrder;

    @Field(() => VehicleBrandCountOrderByAggregateInput, {nullable:true})
    _count?: VehicleBrandCountOrderByAggregateInput;

    @Field(() => VehicleBrandMaxOrderByAggregateInput, {nullable:true})
    _max?: VehicleBrandMaxOrderByAggregateInput;

    @Field(() => VehicleBrandMinOrderByAggregateInput, {nullable:true})
    _min?: VehicleBrandMinOrderByAggregateInput;
}