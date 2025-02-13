import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobCategory } from '../../job-category/dto/job-category.model';
import { Type } from 'class-transformer';
import { ServiceRequest } from '../../service-request/dto/service-request.model';
import { WorkshopJob } from '../../workshop-job/dto/workshop-job.model';
import { JobCount } from './job-count.output';

/**
 * The Job model defines various job entries representing tasks or services offered by workshops.
 * It includes details like name, description, popularity, and associated categories.
 */
@ObjectType({description:'The Job model defines various job entries representing tasks or services offered by workshops.\nIt includes details like name, description, popularity, and associated categories.'})
export class Job {

    /**
     * Identifier of the job
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the job'})
    jobId!: bigint;

    /**
     * Identifier of the job category
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the job category'})
    categoryId!: bigint;

    /**
     * Name of the job
     */
    @Field(() => String, {nullable:true,description:'Name of the job'})
    name!: string | null;

    /**
     * Description of the job
     */
    @Field(() => String, {nullable:true,description:'Description of the job'})
    description!: string | null;

    /**
     * Popularity flag for the job
     * Note: Optional because field defaults to false
     */
    @Field(() => Boolean, {nullable:false,defaultValue:false,description:'Popularity flag for the job\nNote: Optional because field defaults to false'})
    isPopular!: boolean;

    /**
     * Category this job belongs to
     */
    @Field(() => JobCategory, {nullable:false,description:'Category this job belongs to'})
    @Type(() => JobCategory)
    jobCategory?: JobCategory;

    /**
     * Service requests associated with this job
     */
    @Field(() => [ServiceRequest], {nullable:true,description:'Service requests associated with this job'})
    @Type(() => ServiceRequest)
    serviceRequests?: Array<ServiceRequest>;

    /**
     * Workshop jobs associated with this job
     */
    @Field(() => [WorkshopJob], {nullable:true,description:'Workshop jobs associated with this job'})
    @Type(() => WorkshopJob)
    workshopJobs?: Array<WorkshopJob>;

    @Field(() => JobCount, {nullable:false})
    _count?: JobCount;
}
