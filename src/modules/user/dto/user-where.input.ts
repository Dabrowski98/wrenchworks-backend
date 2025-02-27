import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { BoolNullableFilter } from '../../prisma/dto/bool-nullable-filter.input';
import { EnumUserStatusNullableFilter } from '../../prisma/dto/enum-user-status-nullable-filter.input';
import { EnumUserRoleFilter } from '../../prisma/dto/enum-user-role-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { VehicleListRelationFilter } from '../../vehicle/dto/vehicle-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceRequestListRelationFilter } from '../../service-request/dto/service-request-list-relation-filter.input';
import { CustomerListRelationFilter } from '../../customer/dto/customer-list-relation-filter.input';
import { EmployeeListRelationFilter } from '../../employee/dto/employee-list-relation-filter.input';
import { WorkshopListRelationFilter } from '../../workshop/dto/workshop-list-relation-filter.input';
import { ReviewListRelationFilter } from '../../review/dto/review-list-relation-filter.input';
import { ReviewResponseListRelationFilter } from '../../review-response/dto/review-response-list-relation-filter.input';
import { UserReportListRelationFilter } from '../../user-report/dto/user-report-list-relation-filter.input';
import { JoinWorkshopRequestListRelationFilter } from '../../join-workshop-request/dto/join-workshop-request-list-relation-filter.input';
import { SessionDataListRelationFilter } from '../../session-data/dto/session-data-list-relation-filter.input';

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

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    telephoneNumber?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatarURL?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isVerified?: BoolNullableFilter;

    @Field(() => EnumUserStatusNullableFilter, {nullable:true})
    status?: EnumUserStatusNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: StringNullableFilter;

    @Field(() => EnumUserRoleFilter, {nullable:true})
    role?: EnumUserRoleFilter;

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
    @ValidateNested()
    joinWorkshopRequests?: JoinWorkshopRequestListRelationFilter;

    @Field(() => SessionDataListRelationFilter, {nullable:true})
    @ValidateNested()
    sessionData?: SessionDataListRelationFilter;
}