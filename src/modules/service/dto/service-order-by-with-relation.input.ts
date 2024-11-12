import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { ServiceRequestOrderByWithRelationInput } from '../../service-request/dto/service-request-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { TaskOrderByRelationAggregateInput } from '../../task/dto/task-order-by-relation-aggregate.input';
import { CustomerOrderByWithRelationInput } from '../../customer/dto/customer-order-by-with-relation.input';
import { EmployeeOrderByWithRelationInput } from '../../employee/dto/employee-order-by-with-relation.input';
import { VehicleOrderByWithRelationInput } from '../../vehicle/dto/vehicle-order-by-with-relation.input';
import { WorkshopOrderByWithRelationInput } from '../../workshop/dto/workshop-order-by-with-relation.input';

@InputType()
export class ServiceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    serviceId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    serviceRequestId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vehicleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employeeId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    payedOff?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serviceStartDate?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    serviceEndDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => ServiceRequestOrderByWithRelationInput, {nullable:true})
    @Type(() => ServiceRequestOrderByWithRelationInput)
    serviceRequest?: ServiceRequestOrderByWithRelationInput;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    @Type(() => TaskOrderByRelationAggregateInput)
    tasks?: TaskOrderByRelationAggregateInput;

    @Field(() => CustomerOrderByWithRelationInput, {nullable:true})
    @Type(() => CustomerOrderByWithRelationInput)
    customer?: CustomerOrderByWithRelationInput;

    @Field(() => EmployeeOrderByWithRelationInput, {nullable:true})
    @Type(() => EmployeeOrderByWithRelationInput)
    employee?: EmployeeOrderByWithRelationInput;

    @Field(() => VehicleOrderByWithRelationInput, {nullable:true})
    @Type(() => VehicleOrderByWithRelationInput)
    vehicle?: VehicleOrderByWithRelationInput;

    @Field(() => WorkshopOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopOrderByWithRelationInput)
    workshop?: WorkshopOrderByWithRelationInput;
}
