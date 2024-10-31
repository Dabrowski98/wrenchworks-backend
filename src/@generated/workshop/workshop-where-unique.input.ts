import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { WorkshopWhereInput } from './workshop-where.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { AddressWorkshopListRelationFilter } from '../address-workshop/address-workshop-list-relation-filter.input';
import { CustomerListRelationFilter } from '../customer/customer-list-relation-filter.input';
import { Type } from 'class-transformer';
import { EmployeeListRelationFilter } from '../employee/employee-list-relation-filter.input';
import { PermissionSetListRelationFilter } from '../permission-set/permission-set-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { ServiceRequestListRelationFilter } from '../service-request/service-request-list-relation-filter.input';
import { ServiceListRelationFilter } from '../service/service-list-relation-filter.input';
import { PersonRelationFilter } from '../person/person-relation-filter.input';
import { WorkshopDetailsNullableRelationFilter } from '../workshop-details/workshop-details-nullable-relation-filter.input';
import { WorkshopJobListRelationFilter } from '../workshop-job/workshop-job-list-relation-filter.input';
import { WorkshopJobCategoryListRelationFilter } from '../workshop-job-category/workshop-job-category-list-relation-filter.input';

@InputType()
export class WorkshopWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => [WorkshopWhereInput], {nullable:true})
    AND?: Array<WorkshopWhereInput>;

    @Field(() => [WorkshopWhereInput], {nullable:true})
    OR?: Array<WorkshopWhereInput>;

    @Field(() => [WorkshopWhereInput], {nullable:true})
    NOT?: Array<WorkshopWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    personId?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isVerified?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isManagingWork?: BoolNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => AddressWorkshopListRelationFilter, {nullable:true})
    workshopAddresses?: AddressWorkshopListRelationFilter;

    @Field(() => CustomerListRelationFilter, {nullable:true})
    @Type(() => CustomerListRelationFilter)
    customers?: CustomerListRelationFilter;

    @Field(() => EmployeeListRelationFilter, {nullable:true})
    @Type(() => EmployeeListRelationFilter)
    employees?: EmployeeListRelationFilter;

    @Field(() => PermissionSetListRelationFilter, {nullable:true})
    permissionSets?: PermissionSetListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    @Type(() => ReviewListRelationFilter)
    reviews?: ReviewListRelationFilter;

    @Field(() => ServiceRequestListRelationFilter, {nullable:true})
    @Type(() => ServiceRequestListRelationFilter)
    serviceRequests?: ServiceRequestListRelationFilter;

    @Field(() => ServiceListRelationFilter, {nullable:true})
    @Type(() => ServiceListRelationFilter)
    services?: ServiceListRelationFilter;

    @Field(() => PersonRelationFilter, {nullable:true})
    @Type(() => PersonRelationFilter)
    person?: PersonRelationFilter;

    @Field(() => WorkshopDetailsNullableRelationFilter, {nullable:true})
    @Type(() => WorkshopDetailsNullableRelationFilter)
    workshopDetails?: WorkshopDetailsNullableRelationFilter;

    @Field(() => WorkshopJobListRelationFilter, {nullable:true})
    @Type(() => WorkshopJobListRelationFilter)
    workshopJobs?: WorkshopJobListRelationFilter;

    @Field(() => WorkshopJobCategoryListRelationFilter, {nullable:true})
    workshopJobCategories?: WorkshopJobCategoryListRelationFilter;
}
