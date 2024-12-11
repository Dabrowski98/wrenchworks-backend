import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { VehicleModelOrderByRelationAggregateInput } from '../../vehicle-model/dto/vehicle-model-order-by-relation-aggregate.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class VehicleBrandOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    brandName?: keyof typeof SortOrder;

    @Field(() => VehicleModelOrderByRelationAggregateInput, {nullable:true})
    @ValidateNested()
    @Type(() => VehicleModelOrderByRelationAggregateInput)
    vehicleModels?: VehicleModelOrderByRelationAggregateInput;
}