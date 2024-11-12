import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { VehicleModelOrderByRelationAggregateInput } from '../../vehicle-model/dto/vehicle-model-order-by-relation-aggregate.input';

@InputType()
export class VehicleBrandOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    brandName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => VehicleModelOrderByRelationAggregateInput, {nullable:true})
    vehicleModels?: VehicleModelOrderByRelationAggregateInput;
}
