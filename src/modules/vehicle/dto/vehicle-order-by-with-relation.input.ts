import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { ServiceRequestOrderByRelationAggregateInput } from '../../service-request/dto/service-request-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { ServiceOrderByRelationAggregateInput } from '../../service/dto/service-order-by-relation-aggregate.input';
import { VehicleModelOrderByWithRelationInput } from '../../vehicle-model/dto/vehicle-model-order-by-with-relation.input';
import { PersonOrderByWithRelationInput } from '../../person/dto/person-order-by-with-relation.input';
import { VehicleDetailsOrderByWithRelationInput } from '../../vehicle-details/dto/vehicle-details-order-by-with-relation.input';

@InputType()
export class VehicleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    vehicleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    modelId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => ServiceRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ServiceRequestOrderByRelationAggregateInput)
    vehicleAssociatedServiceRequests?: ServiceRequestOrderByRelationAggregateInput;

    @Field(() => ServiceOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ServiceOrderByRelationAggregateInput)
    services?: ServiceOrderByRelationAggregateInput;

    @Field(() => VehicleModelOrderByWithRelationInput, {nullable:true})
    vehicleModel?: VehicleModelOrderByWithRelationInput;

    @Field(() => PersonOrderByWithRelationInput, {nullable:true})
    @Type(() => PersonOrderByWithRelationInput)
    person?: PersonOrderByWithRelationInput;

    @Field(() => VehicleDetailsOrderByWithRelationInput, {nullable:true})
    vehiclesDetails?: VehicleDetailsOrderByWithRelationInput;
}
