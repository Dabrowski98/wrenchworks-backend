import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { BoolNullableFilter } from '../../prisma/dto/bool-nullable-filter.input';
import { EnumUsersStatusNullableFilter } from '../../prisma/dto/enum-users-status-nullable-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { AddressNullableRelationFilter } from '../../address/dto/address-nullable-relation-filter.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { VehicleListRelationFilter } from '../../vehicle/dto/vehicle-list-relation-filter.input';
import { ServiceRequestListRelationFilter } from '../../service-request/dto/service-request-list-relation-filter.input';
import { CustomerListRelationFilter } from '../../customer/dto/customer-list-relation-filter.input';
import { EmployeeListRelationFilter } from '../../employee/dto/employee-list-relation-filter.input';
import { WorkshopListRelationFilter } from '../../workshop/dto/workshop-list-relation-filter.input';
import { ReviewListRelationFilter } from '../../review/dto/review-list-relation-filter.input';
import { ReviewResponseListRelationFilter } from '../../review-response/dto/review-response-list-relation-filter.input';
import { UserReportListRelationFilter } from '../../user-report/dto/user-report-list-relation-filter.input';
import { JoinWorkshopRequestListRelationFilter } from '../../join-workshop-request/dto/join-workshop-request-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    userId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatarURL?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isVerified?: BoolNullableFilter;

    @Field(() => EnumUsersStatusNullableFilter, {nullable:true})
    status?: EnumUsersStatusNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    telephoneNumber?: StringNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    addressId?: BigIntNullableFilter;

    @HideField()
    createdAt?: DateTimeNullableFilter;

    @HideField()
    updatedAt?: DateTimeNullableFilter;

    @HideField()
    deletedAt?: DateTimeNullableFilter;

    @Field(() => AddressNullableRelationFilter, {nullable:true})
    @ValidateNested()
    @Type(() => AddressNullableRelationFilter)
    address?: AddressNullableRelationFilter;

    @Field(() => VehicleListRelationFilter, {nullable:true})
    @Type(() => VehicleListRelationFilter)
    @ValidateNested()
    @Type(() => VehicleListRelationFilter)
    vehicles?: VehicleListRelationFilter;

    @Field(() => ServiceRequestListRelationFilter, {nullable:true})
    @Type(() => ServiceRequestListRelationFilter)
    @ValidateNested()
    @Type(() => ServiceRequestListRelationFilter)
    serviceRequests?: ServiceRequestListRelationFilter;

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

    @Field(() => WorkshopListRelationFilter, {nullable:true})
    @Type(() => WorkshopListRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopListRelationFilter)
    workshops?: WorkshopListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    @Type(() => ReviewListRelationFilter)
    @ValidateNested()
    @Type(() => ReviewListRelationFilter)
    reviews?: ReviewListRelationFilter;

    @Field(() => ReviewResponseListRelationFilter, {nullable:true})
    @Type(() => ReviewResponseListRelationFilter)
    @ValidateNested()
    @Type(() => ReviewResponseListRelationFilter)
    reviewResponses?: ReviewResponseListRelationFilter;

    @Field(() => UserReportListRelationFilter, {nullable:true})
    @ValidateNested()
    @Type(() => UserReportListRelationFilter)
    userReports?: UserReportListRelationFilter;

    @Field(() => JoinWorkshopRequestListRelationFilter, {nullable:true})
    joinWorkshopRequests?: JoinWorkshopRequestListRelationFilter;
}
