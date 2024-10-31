import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Job } from '../job/job.model';
import { ServiceRequest } from '../service-request/service-request.model';

@ObjectType()
export class ServiceRequestJob {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    serviceRequestId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    jobId!: bigint;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Job, {nullable:false})
    job?: Job;

    @Field(() => ServiceRequest, {nullable:false})
    serviceRequest?: ServiceRequest;
}
