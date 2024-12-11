import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { BoolNullableFilter } from '../../prisma/dto/bool-nullable-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { AddressNullableRelationFilter } from '../../address/dto/address-nullable-relation-filter.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CustomerListRelationFilter } from '../../customer/dto/customer-list-relation-filter.input';
import { EmployeeListRelationFilter } from '../../employee/dto/employee-list-relation-filter.input';
import { ReviewListRelationFilter } from '../../review/dto/review-list-relation-filter.input';
import { ServiceRequestListRelationFilter } from '../../service-request/dto/service-request-list-relation-filter.input';
import { ServiceListRelationFilter } from '../../service/dto/service-list-relation-filter.input';
import { UserRelationFilter } from '../../user/dto/user-relation-filter.input';
import { WorkshopDetailsNullableRelationFilter } from '../../workshop-details/dto/workshop-details-nullable-relation-filter.input';
import { WorkshopJobListRelationFilter } from '../../workshop-job/dto/workshop-job-list-relation-filter.input';
import { JobCategoryListRelationFilter } from '../../job-category/dto/job-category-list-relation-filter.input';
import { JoinWorkshopRequestListRelationFilter } from '../../join-workshop-request/dto/join-workshop-request-list-relation-filter.input';
import { WorkshopDeviceListRelationFilter } from '../../workshop-device/dto/workshop-device-list-relation-filter.input';

@InputType()
export class WorkshopWhereInput {

    @Field(() => [WorkshopWhereInput], {nullable:true})
    AND?: Array<WorkshopWhereInput>;

    @Field(() => [WorkshopWhereInput], {nullable:true})
    OR?: Array<WorkshopWhereInput>;

    @Field(() => [WorkshopWhereInput], {nullable:true})
    NOT?: Array<WorkshopWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    ownerId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    addressId?: BigIntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    telephoneNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    refreshToken?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isVerified?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isManagingWork?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isOfferingService?: BoolNullableFilter;

    @Field(() => AddressNullableRelationFilter, {nullable:true})
    @ValidateNested()
    @Type(() => AddressNullableRelationFilter)
    address?: AddressNullableRelationFilter;

    @Field(() => CustomerListRelationFilter, {nullable:true})
    @Type(() => CustomerListRelationFilter)
    @ValidateNested()
    @Type(() => CustomerListRelationFilter)
    customers?: CustomerListRelationFilter;

    @Field(() => EmployeeListRelationFilter, {nullable:true})
    @Type(() => EmployeeListRelationFilter)
    @ValidateNested()
    @Type(() => EmployeeListRelationFilter)
    employees?: EmployeeListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    @Type(() => ReviewListRelationFilter)
    @ValidateNested()
    @Type(() => ReviewListRelationFilter)
    reviews?: ReviewListRelationFilter;

    @Field(() => ServiceRequestListRelationFilter, {nullable:true})
    @Type(() => ServiceRequestListRelationFilter)
    @ValidateNested()
    @Type(() => ServiceRequestListRelationFilter)
    serviceRequests?: ServiceRequestListRelationFilter;

    @Field(() => ServiceListRelationFilter, {nullable:true})
    @Type(() => ServiceListRelationFilter)
    @ValidateNested()
    @Type(() => ServiceListRelationFilter)
    services?: ServiceListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => WorkshopDetailsNullableRelationFilter, {nullable:true})
    @Type(() => WorkshopDetailsNullableRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopDetailsNullableRelationFilter)
    workshopDetails?: WorkshopDetailsNullableRelationFilter;

    @Field(() => WorkshopJobListRelationFilter, {nullable:true})
    @Type(() => WorkshopJobListRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopJobListRelationFilter)
    workshopJobs?: WorkshopJobListRelationFilter;

    @Field(() => JobCategoryListRelationFilter, {nullable:true})
    @ValidateNested()
    @Type(() => JobCategoryListRelationFilter)
    jobCategories?: JobCategoryListRelationFilter;

    @Field(() => JoinWorkshopRequestListRelationFilter, {nullable:true})
    joinWorkshopRequests?: JoinWorkshopRequestListRelationFilter;

    @Field(() => WorkshopDeviceListRelationFilter, {nullable:true})
    workshopPCs?: WorkshopDeviceListRelationFilter;
}