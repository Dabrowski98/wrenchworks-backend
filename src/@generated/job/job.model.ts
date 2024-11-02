import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobCategory } from '../job-category/job-category.model';
import { ServiceRequest } from '../service-request/service-request.model';
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

    @Field(() => [ServiceRequest], {nullable:true})
    serviceRequests?: Array<ServiceRequest>;

    @Field(() => [WorkshopJob], {nullable:true})
    jobWorkshops?: Array<WorkshopJob>;

    @Field(() => JobCount, {nullable:false})
    _count?: JobCount;
}
