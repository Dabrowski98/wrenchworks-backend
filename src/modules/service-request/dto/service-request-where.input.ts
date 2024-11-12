import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { DateTimeFilter } from '../../prisma/dto/date-time-filter.input';
import { EnumServiceRequestsStatusNullableFilter } from '../../prisma/dto/enum-service-requests-status-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/dto/date-time-nullable-filter.input';
import { JobListRelationFilter } from '../../job/dto/job-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ServiceNullableRelationFilter } from '../../service/dto/service-nullable-relation-filter.input';
import { VehicleRelationFilter } from '../../vehicle/dto/vehicle-relation-filter.input';
import { WorkshopRelationFilter } from '../../workshop/dto/workshop-relation-filter.input';
import { PersonRelationFilter } from '../../person/dto/person-relation-filter.input';

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

    @Field(() => BigIntFilter, {nullable:true})
    personId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    requestedAt?: DateTimeFilter;

    @Field(() => EnumServiceRequestsStatusNullableFilter, {nullable:true})
    status?: EnumServiceRequestsStatusNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    approvedServiceId?: BigIntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => JobListRelationFilter, {nullable:true})
    @Type(() => JobListRelationFilter)
    jobs?: JobListRelationFilter;

    @Field(() => ServiceNullableRelationFilter, {nullable:true})
    @Type(() => ServiceNullableRelationFilter)
    approvedService?: ServiceNullableRelationFilter;

    @Field(() => VehicleRelationFilter, {nullable:true})
    @Type(() => VehicleRelationFilter)
    vehicle?: VehicleRelationFilter;

    @Field(() => WorkshopRelationFilter, {nullable:true})
    @Type(() => WorkshopRelationFilter)
    workshop?: WorkshopRelationFilter;

    @Field(() => PersonRelationFilter, {nullable:true})
    @Type(() => PersonRelationFilter)
    person?: PersonRelationFilter;
}
