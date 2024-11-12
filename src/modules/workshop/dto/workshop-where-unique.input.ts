import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { WorkshopWhereInput } from './workshop-where.input';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { BoolNullableFilter } from '../../prisma/dto/bool-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { AddressNullableRelationFilter } from '../../address/dto/address-nullable-relation-filter.input';
import { CustomerListRelationFilter } from '../../customer/dto/customer-list-relation-filter.input';
import { Type } from 'class-transformer';
import { EmployeeListRelationFilter } from '../../employee/dto/employee-list-relation-filter.input';
import { PermissionSetListRelationFilter } from '../../permission-set/dto/permission-set-list-relation-filter.input';
import { ReviewListRelationFilter } from '../../review/dto/review-list-relation-filter.input';
import { ServiceRequestListRelationFilter } from '../../service-request/dto/service-request-list-relation-filter.input';
import { ServiceListRelationFilter } from '../../service/dto/service-list-relation-filter.input';
import { PersonRelationFilter } from '../../person/dto/person-relation-filter.input';
import { WorkshopDetailsNullableRelationFilter } from '../../workshop-details/dto/workshop-details-nullable-relation-filter.input';
import { WorkshopJobListRelationFilter } from '../../workshop-job/dto/workshop-job-list-relation-filter.input';
import { JobCategoryListRelationFilter } from '../../job-category/dto/job-category-list-relation-filter.input';

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

    @Field(() => BigIntNullableFilter, {nullable:true})
    addressId?: BigIntNullableFilter;

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

    @Field(() => AddressNullableRelationFilter, {nullable:true})
    address?: AddressNullableRelationFilter;

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

    @Field(() => JobCategoryListRelationFilter, {nullable:true})
    jobCategories?: JobCategoryListRelationFilter;
}
