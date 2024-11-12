import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { AddressOrderByWithRelationInput } from '../../address/dto/address-order-by-with-relation.input';
import { CustomerOrderByRelationAggregateInput } from '../../customer/dto/customer-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { EmployeeOrderByRelationAggregateInput } from '../../employee/dto/employee-order-by-relation-aggregate.input';
import { ServiceRequestOrderByRelationAggregateInput } from '../../service-request/dto/service-request-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../../user/dto/user-order-by-with-relation.input';
import { VehicleOrderByRelationAggregateInput } from '../../vehicle/dto/vehicle-order-by-relation-aggregate.input';
import { WorkshopOrderByRelationAggregateInput } from '../../workshop/dto/workshop-order-by-relation-aggregate.input';

@InputType()
export class PersonOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    telephoneNumber?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    addressId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => AddressOrderByWithRelationInput, {nullable:true})
    address?: AddressOrderByWithRelationInput;

    @Field(() => CustomerOrderByRelationAggregateInput, {nullable:true})
    @Type(() => CustomerOrderByRelationAggregateInput)
    customers?: CustomerOrderByRelationAggregateInput;

    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    @Type(() => EmployeeOrderByRelationAggregateInput)
    employees?: EmployeeOrderByRelationAggregateInput;

    @Field(() => ServiceRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ServiceRequestOrderByRelationAggregateInput)
    serviceRequests?: ServiceRequestOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => VehicleOrderByRelationAggregateInput, {nullable:true})
    @Type(() => VehicleOrderByRelationAggregateInput)
    vehicles?: VehicleOrderByRelationAggregateInput;

    @Field(() => WorkshopOrderByRelationAggregateInput, {nullable:true})
    @Type(() => WorkshopOrderByRelationAggregateInput)
    workshops?: WorkshopOrderByRelationAggregateInput;
}
