import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { VehicleOrderByRelationAggregateInput } from '../../vehicle/dto/vehicle-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleBrandOrderByWithRelationInput } from '../../vehicle-brand/dto/vehicle-brand-order-by-with-relation.input';

@InputType()
export class VehicleModelOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    modelId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    modelName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;

    @Field(() => VehicleOrderByRelationAggregateInput, {nullable:true})
    @Type(() => VehicleOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => VehicleOrderByRelationAggregateInput)
    vehicles?: VehicleOrderByRelationAggregateInput;

    @Field(() => VehicleBrandOrderByWithRelationInput, {nullable:true})
    @ValidateNested()
    @Type(() => VehicleBrandOrderByWithRelationInput)
    vehicleBrand?: VehicleBrandOrderByWithRelationInput;
}