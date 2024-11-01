import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ServiceRequestJobOrderByRelationAggregateInput } from '../service-request-job/service-request-job-order-by-relation-aggregate.input';
import { ServiceOrderByWithRelationInput } from '../service/service-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { VehicleOrderByWithRelationInput } from '../vehicle/vehicle-order-by-with-relation.input';
import { WorkshopOrderByWithRelationInput } from '../workshop/workshop-order-by-with-relation.input';
import { PersonOrderByWithRelationInput } from '../person/person-order-by-with-relation.input';

@InputType()
export class ServiceRequestOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    serviceRequestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vehicleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    requestedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    approvedServiceId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => ServiceRequestJobOrderByRelationAggregateInput, {nullable:true})
    serviceRequestJobs?: ServiceRequestJobOrderByRelationAggregateInput;

    @Field(() => ServiceOrderByWithRelationInput, {nullable:true})
    @Type(() => ServiceOrderByWithRelationInput)
    approvedService?: ServiceOrderByWithRelationInput;

    @Field(() => VehicleOrderByWithRelationInput, {nullable:true})
    @Type(() => VehicleOrderByWithRelationInput)
    vehicle?: VehicleOrderByWithRelationInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;

    @Field(() => PersonOrderByWithRelationInput, {nullable:true})
    @Type(() => PersonOrderByWithRelationInput)
    person?: PersonOrderByWithRelationInput;
}
