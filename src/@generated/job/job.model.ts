import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobCategory } from '../job-category/job-category.model';
import { ServiceRequestJob } from '../service-request-job/service-request-job.model';
import { WorkshopJob } from '../workshop-job/workshop-job.model';
import { JobCount } from './job-count.output';

@ObjectType()
export class Job {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    jobId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    categoryId!: bigint;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPopular!: boolean;

    @Field(() => JobCategory, {nullable:false})
    jobCategory?: JobCategory;

    @Field(() => [ServiceRequestJob], {nullable:true})
    jobServiceRequests?: Array<ServiceRequestJob>;

    @Field(() => [WorkshopJob], {nullable:true})
    jobWorkshops?: Array<WorkshopJob>;

    @Field(() => JobCount, {nullable:false})
    _count?: JobCount;
}
