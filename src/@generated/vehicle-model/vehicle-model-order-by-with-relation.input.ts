import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { VehicleOrderByRelationAggregateInput } from '../vehicle/vehicle-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { VehicleBrandOrderByWithRelationInput } from '../vehicle-brand/vehicle-brand-order-by-with-relation.input';

@InputType()
export class VehicleModelOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    modelId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    modelName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => VehicleOrderByRelationAggregateInput, {nullable:true})
    @Type(() => VehicleOrderByRelationAggregateInput)
    vehicles?: VehicleOrderByRelationAggregateInput;

    @Field(() => VehicleBrandOrderByWithRelationInput, {nullable:true})
    vehiclesBrand?: VehicleBrandOrderByWithRelationInput;
}
