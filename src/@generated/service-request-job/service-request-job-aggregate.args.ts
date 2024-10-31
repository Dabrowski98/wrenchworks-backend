import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestJobWhereInput } from './service-request-job-where.input';
import { Type } from 'class-transformer';
import { ServiceRequestJobOrderByWithRelationInput } from './service-request-job-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestJobWhereUniqueInput } from './service-request-job-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ServiceRequestJobCountAggregateInput } from './service-request-job-count-aggregate.input';
import { ServiceRequestJobAvgAggregateInput } from './service-request-job-avg-aggregate.input';
import { ServiceRequestJobSumAggregateInput } from './service-request-job-sum-aggregate.input';
import { ServiceRequestJobMinAggregateInput } from './service-request-job-min-aggregate.input';
import { ServiceRequestJobMaxAggregateInput } from './service-request-job-max-aggregate.input';

@ArgsType()
export class ServiceRequestJobAggregateArgs {

    @Field(() => ServiceRequestJobWhereInput, {nullable:true})
    @Type(() => ServiceRequestJobWhereInput)
    where?: ServiceRequestJobWhereInput;

    @Field(() => [ServiceRequestJobOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ServiceRequestJobOrderByWithRelationInput>;

    @Field(() => ServiceRequestJobWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ServiceRequestJobWhereUniqueInput, 'serviceRequestId_jobId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ServiceRequestJobCountAggregateInput, {nullable:true})
    _count?: ServiceRequestJobCountAggregateInput;

    @Field(() => ServiceRequestJobAvgAggregateInput, {nullable:true})
    _avg?: ServiceRequestJobAvgAggregateInput;

    @Field(() => ServiceRequestJobSumAggregateInput, {nullable:true})
    _sum?: ServiceRequestJobSumAggregateInput;

    @Field(() => ServiceRequestJobMinAggregateInput, {nullable:true})
    _min?: ServiceRequestJobMinAggregateInput;

    @Field(() => ServiceRequestJobMaxAggregateInput, {nullable:true})
    _max?: ServiceRequestJobMaxAggregateInput;
}
