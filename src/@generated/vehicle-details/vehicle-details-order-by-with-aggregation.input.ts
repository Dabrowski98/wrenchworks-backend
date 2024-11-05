import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { VehicleDetailsCountOrderByAggregateInput } from './vehicle-details-count-order-by-aggregate.input';
import { VehicleDetailsAvgOrderByAggregateInput } from './vehicle-details-avg-order-by-aggregate.input';
import { VehicleDetailsMaxOrderByAggregateInput } from './vehicle-details-max-order-by-aggregate.input';
import { VehicleDetailsMinOrderByAggregateInput } from './vehicle-details-min-order-by-aggregate.input';
import { VehicleDetailsSumOrderByAggregateInput } from './vehicle-details-sum-order-by-aggregate.input';

@InputType()
export class VehicleDetailsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    vehicleDetailsId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    vehicleId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    yearOfProduction?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    VIN?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    engineCapacity?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    licensePlate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fuelType?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    engineNo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bodyColor?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => VehicleDetailsCountOrderByAggregateInput, {nullable:true})
    _count?: VehicleDetailsCountOrderByAggregateInput;

    @Field(() => VehicleDetailsAvgOrderByAggregateInput, {nullable:true})
    _avg?: VehicleDetailsAvgOrderByAggregateInput;

    @Field(() => VehicleDetailsMaxOrderByAggregateInput, {nullable:true})
    _max?: VehicleDetailsMaxOrderByAggregateInput;

    @Field(() => VehicleDetailsMinOrderByAggregateInput, {nullable:true})
    _min?: VehicleDetailsMinOrderByAggregateInput;

    @Field(() => VehicleDetailsSumOrderByAggregateInput, {nullable:true})
    _sum?: VehicleDetailsSumOrderByAggregateInput;
}
