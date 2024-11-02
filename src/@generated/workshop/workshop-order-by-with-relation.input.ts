import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AddressOrderByRelationAggregateInput } from '../address/address-order-by-relation-aggregate.input';
import { CustomerOrderByRelationAggregateInput } from '../customer/customer-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { EmployeeOrderByRelationAggregateInput } from '../employee/employee-order-by-relation-aggregate.input';
import { PermissionSetOrderByRelationAggregateInput } from '../permission-set/permission-set-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { ServiceRequestOrderByRelationAggregateInput } from '../service-request/service-request-order-by-relation-aggregate.input';
import { ServiceOrderByRelationAggregateInput } from '../service/service-order-by-relation-aggregate.input';
import { PersonOrderByWithRelationInput } from '../person/person-order-by-with-relation.input';
import { WorkshopDetailsOrderByWithRelationInput } from '../workshop-details/workshop-details-order-by-with-relation.input';
import { WorkshopJobOrderByRelationAggregateInput } from '../workshop-job/workshop-job-order-by-relation-aggregate.input';
import { JobCategoryOrderByRelationAggregateInput } from '../job-category/job-category-order-by-relation-aggregate.input';

@InputType()
export class WorkshopOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;

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

    @Field(() => AddressOrderByRelationAggregateInput, {nullable:true})
    addresses?: AddressOrderByRelationAggregateInput;

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
