import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from 'nestjs-graphql';
import { VehicleModelOrderByRelationAggregateInput } from '../../vehicle-model/dto/vehicle-model-order-by-relation-aggregate.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class VehicleBrandOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    brandName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    updatedAt?: SortOrderInput;

    @Field(() => VehicleModelOrderByRelationAggregateInput, {nullable:true})
    @ValidateNested()
    @Type(() => VehicleModelOrderByRelationAggregateInput)
    vehicleModels?: VehicleModelOrderByRelationAggregateInput;
}
