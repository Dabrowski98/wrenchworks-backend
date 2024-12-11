import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from '@nestjs/graphql';
import { AddressOrderByWithRelationInput } from '../../address/dto/address-order-by-with-relation.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CustomerOrderByRelationAggregateInput } from '../../customer/dto/customer-order-by-relation-aggregate.input';
import { EmployeeOrderByRelationAggregateInput } from '../../employee/dto/employee-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../../review/dto/review-order-by-relation-aggregate.input';
import { ServiceRequestOrderByRelationAggregateInput } from '../../service-request/dto/service-request-order-by-relation-aggregate.input';
import { ServiceOrderByRelationAggregateInput } from '../../service/dto/service-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../../user/dto/user-order-by-with-relation.input';
import { WorkshopDetailsOrderByWithRelationInput } from '../../workshop-details/dto/workshop-details-order-by-with-relation.input';
import { WorkshopJobOrderByRelationAggregateInput } from '../../workshop-job/dto/workshop-job-order-by-relation-aggregate.input';
import { JobCategoryOrderByRelationAggregateInput } from '../../job-category/dto/job-category-order-by-relation-aggregate.input';
import { JoinWorkshopRequestOrderByRelationAggregateInput } from '../../join-workshop-request/dto/join-workshop-request-order-by-relation-aggregate.input';
import { WorkshopDeviceOrderByRelationAggregateInput } from '../../workshop-device/dto/workshop-device-order-by-relation-aggregate.input';

@InputType()
export class WorkshopOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    addressId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    telephoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    refreshToken?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    isVerified?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    isManagingWork?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    isOfferingService?: SortOrderInput;

    @Field(() => AddressOrderByWithRelationInput, {nullable:true})
    @ValidateNested()
    @Type(() => AddressOrderByWithRelationInput)
    address?: AddressOrderByWithRelationInput;

    @Field(() => CustomerOrderByRelationAggregateInput, {nullable:true})
    @Type(() => CustomerOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => CustomerOrderByRelationAggregateInput)
    customers?: CustomerOrderByRelationAggregateInput;

    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    @Type(() => EmployeeOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => EmployeeOrderByRelationAggregateInput)
    employees?: EmployeeOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ReviewOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => ReviewOrderByRelationAggregateInput)
    reviews?: ReviewOrderByRelationAggregateInput;

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => WorkshopDetailsOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopDetailsOrderByWithRelationInput)
    @ValidateNested()
    @Type(() => WorkshopDetailsOrderByWithRelationInput)
    workshopDetails?: WorkshopDetailsOrderByWithRelationInput;

    @Field(() => WorkshopJobOrderByRelationAggregateInput, {nullable:true})
    @Type(() => WorkshopJobOrderByRelationAggregateInput)
    @ValidateNested()
    @Type(() => WorkshopJobOrderByRelationAggregateInput)
    workshopJobs?: WorkshopJobOrderByRelationAggregateInput;

    @Field(() => JobCategoryOrderByRelationAggregateInput, {nullable:true})
    @ValidateNested()
    @Type(() => JobCategoryOrderByRelationAggregateInput)
    jobCategories?: JobCategoryOrderByRelationAggregateInput;

    @Field(() => JoinWorkshopRequestOrderByRelationAggregateInput, {nullable:true})
    joinWorkshopRequests?: JoinWorkshopRequestOrderByRelationAggregateInput;

    @Field(() => WorkshopDeviceOrderByRelationAggregateInput, {nullable:true})
    workshopPCs?: WorkshopDeviceOrderByRelationAggregateInput;
}