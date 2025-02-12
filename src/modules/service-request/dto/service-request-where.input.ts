import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { EnumServiceRequestStatusNullableFilter } from '../../prisma/dto/enum-service-request-status-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { JobListRelationFilter } from '../../job/dto/job-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceNullableRelationFilter } from '../../service/dto/service-nullable-relation-filter.input';
import { VehicleRelationFilter } from '../../vehicle/dto/vehicle-relation-filter.input';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';
import { UserNullableRelationFilter } from '../../user/dto/user-nullable-relation-filter.input';
import { GuestNullableRelationFilter } from '../../guest/dto/guest-nullable-relation-filter.input';

@InputType()
export class ServiceRequestWhereInput {

    @Field(() => [ServiceRequestWhereInput], {nullable:true})
    AND?: Array<ServiceRequestWhereInput>;

    @Field(() => [ServiceRequestWhereInput], {nullable:true})
    OR?: Array<ServiceRequestWhereInput>;

    @Field(() => [ServiceRequestWhereInput], {nullable:true})
    NOT?: Array<ServiceRequestWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    serviceRequestId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    workshopId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    vehicleId?: BigIntFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    userId?: BigIntNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    guestId?: BigIntNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    approvedServiceId?: BigIntNullableFilter;

    @Field(() => EnumServiceRequestStatusNullableFilter, {nullable:true})
    status?: EnumServiceRequestStatusNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => JobListRelationFilter, {nullable:true})
    @Type(() => JobListRelationFilter)
    @ValidateNested()
    @Type(() => JobListRelationFilter)
    jobs?: JobListRelationFilter;

    @Field(() => ServiceNullableRelationFilter, {nullable:true})
    @Type(() => ServiceNullableRelationFilter)
    @ValidateNested()
    @Type(() => ServiceNullableRelationFilter)
    approvedService?: ServiceNullableRelationFilter;

    @Field(() => VehicleRelationFilter, {nullable:true})
    @Type(() => VehicleRelationFilter)
    @ValidateNested()
    @Type(() => VehicleRelationFilter)
    vehicle?: VehicleRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    @ValidateNested()
    user?: UserNullableRelationFilter;

    @Field(() => GuestNullableRelationFilter, {nullable:true})
    @Type(() => GuestNullableRelationFilter)
    guest?: GuestNullableRelationFilter;
}