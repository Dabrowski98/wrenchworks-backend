import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { JobOrderByRelationAggregateInput } from '../../job/dto/job-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceOrderByWithRelationInput } from '../../service/dto/service-order-by-with-relation.input';
import { VehicleOrderByWithRelationInput } from '../../vehicle/dto/vehicle-order-by-with-relation.input';
import { WorkshopOrderByWithRelationInput } from '../../workshop/dto/workshop-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../../user/dto/user-order-by-with-relation.input';
import { GuestOrderByWithRelationInput } from '../../guest/dto/guest-order-by-with-relation.input';

@InputType()
export class ServiceRequestOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    serviceRequestId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vehicleId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    guestId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    approvedServiceId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => JobOrderByRelationAggregateInput, {nullable:true})
    @Type(() => JobOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => JobOrderByRelationAggregateInput)
    jobs?: JobOrderByRelationAggregateInput;

    @Field(() => ServiceOrderByWithRelationInput, {nullable:true})
    @Type(() => ServiceOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => ServiceOrderByWithRelationInput)
    approvedService?: ServiceOrderByWithRelationInput;

    @Field(() => VehicleOrderByWithRelationInput, {nullable:true})
    @Type(() => VehicleOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => VehicleOrderByWithRelationInput)
    vehicle?: VehicleOrderByWithRelationInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => GuestOrderByWithRelationInput, {nullable:true})
    @Type(() => GuestOrderByWithRelationInput)
    guest?: GuestOrderByWithRelationInput;
}