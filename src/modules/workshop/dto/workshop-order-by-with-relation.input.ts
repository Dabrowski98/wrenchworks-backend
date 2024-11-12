import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { AddressOrderByWithRelationInput } from '../../address/dto/address-order-by-with-relation.input';
import { CustomerOrderByRelationAggregateInput } from '../../customer/dto/customer-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { EmployeeOrderByRelationAggregateInput } from '../../employee/dto/employee-order-by-relation-aggregate.input';
import { PermissionSetOrderByRelationAggregateInput } from '../../permission-set/dto/permission-set-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../../review/dto/review-order-by-relation-aggregate.input';
import { ServiceRequestOrderByRelationAggregateInput } from '../../service-request/dto/service-request-order-by-relation-aggregate.input';
import { ServiceOrderByRelationAggregateInput } from '../../service/dto/service-order-by-relation-aggregate.input';
import { PersonOrderByWithRelationInput } from '../../person/dto/person-order-by-with-relation.input';
import { WorkshopDetailsOrderByWithRelationInput } from '../../workshop-details/dto/workshop-details-order-by-with-relation.input';
import { WorkshopJobOrderByRelationAggregateInput } from '../../workshop-job/dto/workshop-job-order-by-relation-aggregate.input';
import { JobCategoryOrderByRelationAggregateInput } from '../../job-category/dto/job-category-order-by-relation-aggregate.input';

@InputType()
export class WorkshopOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    addressId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    isVerified?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    isManagingWork?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

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

    @Field(() => PermissionSetOrderByRelationAggregateInput, {nullable:true})
    permissionSets?: PermissionSetOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ReviewOrderByRelationAggregateInput)
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => ServiceRequestOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ServiceRequestOrderByRelationAggregateInput)
    serviceRequests?: ServiceRequestOrderByRelationAggregateInput;

    @Field(() => ServiceOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ServiceOrderByRelationAggregateInput)
    services?: ServiceOrderByRelationAggregateInput;

    @Field(() => PersonOrderByWithRelationInput, {nullable:true})
    @Type(() => PersonOrderByWithRelationInput)
    person?: PersonOrderByWithRelationInput;

    @Field(() => WorkshopDetailsOrderByWithRelationInput, {nullable:true})
    @Type(() => WorkshopDetailsOrderByWithRelationInput)
    workshopDetails?: WorkshopDetailsOrderByWithRelationInput;

    @Field(() => WorkshopJobOrderByRelationAggregateInput, {nullable:true})
    @Type(() => WorkshopJobOrderByRelationAggregateInput)
    workshopJobs?: WorkshopJobOrderByRelationAggregateInput;

    @Field(() => JobCategoryOrderByRelationAggregateInput, {nullable:true})
    jobCategories?: JobCategoryOrderByRelationAggregateInput;
}
