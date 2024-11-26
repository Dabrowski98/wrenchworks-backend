import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestOrderByWithRelationInput } from '../../service-request/dto/service-request-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
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
    addedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    addedBy?: SortOrderInput;

    @HideField()
    resolvedAt?: SortOrderInput;

    @HideField()
    resolvedBy?: SortOrderInput;

    @HideField()
    updatedAt?: SortOrderInput;

    @HideField()
    updatedBy?: SortOrderInput;

    @HideField()
    deletedAt?: SortOrderInput;

    @Field(() => ServiceRequestOrderByWithRelationInput, {nullable:true})
    @Type(() => ServiceRequestOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => ServiceRequestOrderByWithRelationInput)
    serviceRequest?: ServiceRequestOrderByWithRelationInput;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    @Type(() => TaskOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => TaskOrderByRelationAggregateInput)
    tasks?: TaskOrderByRelationAggregateInput;

    @Field(() => CustomerOrderByWithRelationInput, {nullable:true})
    @Type(() => CustomerOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => CustomerOrderByWithRelationInput)
    customer?: CustomerOrderByWithRelationInput;

    @Field(() => EmployeeOrderByWithRelationInput, {nullable:true})
    @Type(() => EmployeeOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => EmployeeOrderByWithRelationInput)
    employee?: EmployeeOrderByWithRelationInput;

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
}
