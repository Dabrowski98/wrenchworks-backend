import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { JobRelationFilter } from '../job/job-relation-filter.input';
import { Type } from 'class-transformer';
import { ServiceRequestRelationFilter } from '../service-request/service-request-relation-filter.input';

@InputType()
export class ServiceRequestJobWhereInput {

    @Field(() => [ServiceRequestJobWhereInput], {nullable:true})
    AND?: Array<ServiceRequestJobWhereInput>;

    @Field(() => [ServiceRequestJobWhereInput], {nullable:true})
    OR?: Array<ServiceRequestJobWhereInput>;

    @Field(() => [ServiceRequestJobWhereInput], {nullable:true})
    NOT?: Array<ServiceRequestJobWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    serviceRequestId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    jobId?: BigIntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => JobRelationFilter, {nullable:true})
    @Type(() => JobRelationFilter)
    job?: JobRelationFilter;

    @Field(() => ServiceRequestRelationFilter, {nullable:true})
    @Type(() => ServiceRequestRelationFilter)
    serviceRequest?: ServiceRequestRelationFilter;
}
