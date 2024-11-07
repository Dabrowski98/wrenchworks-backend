import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestWhereInput } from './service-request-where.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumServiceRequestsStatusNullableFilter } from '../prisma/enum-service-requests-status-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { JobListRelationFilter } from '../job/job-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ServiceNullableRelationFilter } from '../service/service-nullable-relation-filter.input';
import { VehicleRelationFilter } from '../vehicle/vehicle-relation-filter.input';
import { WorkshopRelationFilter } from '../workshop/workshop-relation-filter.input';
import { PersonRelationFilter } from '../person/person-relation-filter.input';

@InputType()
export class ServiceRequestWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    serviceRequestId?: bigint | number;

    @Field(() => String, {nullable:true})
    approvedServiceId?: bigint | number;

    @Field(() => [ServiceRequestWhereInput], {nullable:true})
    AND?: Array<ServiceRequestWhereInput>;

    @Field(() => [ServiceRequestWhereInput], {nullable:true})
    OR?: Array<ServiceRequestWhereInput>;

    @Field(() => [ServiceRequestWhereInput], {nullable:true})
    NOT?: Array<ServiceRequestWhereInput>;

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
