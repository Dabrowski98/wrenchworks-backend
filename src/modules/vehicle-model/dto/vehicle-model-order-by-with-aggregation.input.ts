import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { VehicleModelCountOrderByAggregateInput } from './vehicle-model-count-order-by-aggregate.input';
import { VehicleModelAvgOrderByAggregateInput } from './vehicle-model-avg-order-by-aggregate.input';
import { VehicleModelMaxOrderByAggregateInput } from './vehicle-model-max-order-by-aggregate.input';
import { VehicleModelMinOrderByAggregateInput } from './vehicle-model-min-order-by-aggregate.input';
import { VehicleModelSumOrderByAggregateInput } from './vehicle-model-sum-order-by-aggregate.input';

@InputType()
export class VehicleModelOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    modelId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    modelName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;

    @HideField()
    createdAt?: SortOrderInput;

    @HideField()
    updatedAt?: SortOrderInput;

    @Field(() => VehicleModelCountOrderByAggregateInput, {nullable:true})
    _count?: VehicleModelCountOrderByAggregateInput;

    @Field(() => VehicleModelAvgOrderByAggregateInput, {nullable:true})
    _avg?: VehicleModelAvgOrderByAggregateInput;

    @Field(() => VehicleModelMaxOrderByAggregateInput, {nullable:true})
    _max?: VehicleModelMaxOrderByAggregateInput;

    @Field(() => VehicleModelMinOrderByAggregateInput, {nullable:true})
    _min?: VehicleModelMinOrderByAggregateInput;

    @Field(() => VehicleModelSumOrderByAggregateInput, {nullable:true})
    _sum?: VehicleModelSumOrderByAggregateInput;
}
