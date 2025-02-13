import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestOrderByRelationAggregateInput } from '../../service-request/dto/service-request-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceOrderByRelationAggregateInput } from '../../service/dto/service-order-by-relation-aggregate.input';
import { VehicleModelOrderByWithRelationInput } from '../../vehicle-model/dto/vehicle-model-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../../user/dto/user-order-by-with-relation.input';
import { CustomerOrderByWithRelationInput } from '../../customer/dto/customer-order-by-with-relation.input';
import { GuestOrderByWithRelationInput } from '../../guest/dto/guest-order-by-with-relation.input';
import { VehicleDetailsOrderByWithRelationInput } from '../../vehicle-details/dto/vehicle-details-order-by-with-relation.input';

@InputType()
export class VehicleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    vehicleId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    guestId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    customerId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    modelId?: keyof typeof SortOrder;

    @HideField()
    deletedAt?: SortOrderInput;

    @Field(() => ServiceRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ServiceRequestOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => ServiceRequestOrderByRelationAggregateInput)
    serviceRequests?: ServiceRequestOrderByRelationAggregateInput;

    @Field(() => ServiceOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ServiceOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => ServiceOrderByRelationAggregateInput)
    services?: ServiceOrderByRelationAggregateInput;

    @Field(() => VehicleModelOrderByWithRelationInput, {nullable:true})
    @ValidateNested()
    @Type(() => VehicleModelOrderByWithRelationInput)
    vehicleModel?: VehicleModelOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    @ValidateNested()
    user?: UserOrderByWithRelationInput;

    @Field(() => CustomerOrderByWithRelationInput, {nullable:true})
    @Type(() => CustomerOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => CustomerOrderByWithRelationInput)
    customer?: CustomerOrderByWithRelationInput;

    @Field(() => GuestOrderByWithRelationInput, {nullable:true})
    @Type(() => GuestOrderByWithRelationInput)
    guest?: GuestOrderByWithRelationInput;

    @Field(() => VehicleDetailsOrderByWithRelationInput, {nullable:true})
    @ValidateNested()
    vehicleDetails?: VehicleDetailsOrderByWithRelationInput;
}
