import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { VehicleCountOrderByAggregateInput } from './vehicle-count-order-by-aggregate.input';
import { VehicleAvgOrderByAggregateInput } from './vehicle-avg-order-by-aggregate.input';
import { VehicleMaxOrderByAggregateInput } from './vehicle-max-order-by-aggregate.input';
import { VehicleMinOrderByAggregateInput } from './vehicle-min-order-by-aggregate.input';
import { VehicleSumOrderByAggregateInput } from './vehicle-sum-order-by-aggregate.input';

@InputType()
export class VehicleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    vehicleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    modelId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => VehicleCountOrderByAggregateInput, {nullable:true})
    _count?: VehicleCountOrderByAggregateInput;

    @Field(() => VehicleAvgOrderByAggregateInput, {nullable:true})
    _avg?: VehicleAvgOrderByAggregateInput;

    @Field(() => VehicleMaxOrderByAggregateInput, {nullable:true})
    _max?: VehicleMaxOrderByAggregateInput;

    @Field(() => VehicleMinOrderByAggregateInput, {nullable:true})
    _min?: VehicleMinOrderByAggregateInput;

    @Field(() => VehicleSumOrderByAggregateInput, {nullable:true})
    _sum?: VehicleSumOrderByAggregateInput;
}
