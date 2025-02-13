import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobCategory } from '../../job-category/dto/job-category.model';
import { Type } from 'class-transformer';
import { ServiceRequest } from '../../service-request/dto/service-request.model';
import { WorkshopJob } from '../../workshop-job/dto/workshop-job.model';
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

    /**
     * Note: Optional because field defaults to false
     */
    @Field(() => Boolean, {nullable:false,defaultValue:false,description:'Note: Optional because field defaults to false'})
    isPopular!: boolean;

    @Field(() => JobCategory, {nullable:false})
    @Type(() => JobCategory)
    jobCategory?: JobCategory;

    @Field(() => [ServiceRequest], {nullable:true})
    @Type(() => ServiceRequest)
    serviceRequests?: Array<ServiceRequest>;

    @Field(() => [WorkshopJob], {nullable:true})
    @Type(() => WorkshopJob)
    workshopJobs?: Array<WorkshopJob>;

    @Field(() => JobCount, {nullable:false})
    _count?: JobCount;
}
