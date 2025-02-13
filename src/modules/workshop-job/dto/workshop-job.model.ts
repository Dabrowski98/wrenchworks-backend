import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Task } from '../../task/dto/task.model';
import { Type } from 'class-transformer';
import { Job } from '../../job/dto/job.model';
import { Workshop } from '../../workshop/dto/workshop.model';
import { WorkshopJobCount } from './workshop-job-count.output';

/**
 * The WorkshopJob model outlines the jobs offered by a workshop, including descriptions, pricing, and availability.
 * It establishes connections between the workshop and job entities and tracks creation and update details.
 */
@ObjectType({description:'The WorkshopJob model outlines the jobs offered by a workshop, including descriptions, pricing, and availability.\nIt establishes connections between the workshop and job entities and tracks creation and update details.'})
export class WorkshopJob {

    /**
     * Identifier of the workshop job
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop job'})
    workshopJobId!: bigint;

    /**
     * Identifier of the workshop offering the job
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop offering the job'})
    workshopId!: bigint;

    /**
     * Identifier of the job being offered
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the job being offered'})
    jobId!: bigint;

    /**
     * Workshop-specific description of the job
     */
    @Field(() => String, {nullable:true,description:'Workshop-specific description of the job'})
    workshopJobDescription!: string | null;

    /**
     * Minimum price for the job
     */
    @Field(() => GraphQLDecimal, {nullable:true,description:'Minimum price for the job'})
    minPrice!: Decimal | null;

    /**
     * Maximum price for the job
     */
    @Field(() => GraphQLDecimal, {nullable:true,description:'Maximum price for the job'})
    maxPrice!: Decimal | null;

    /**
     * Flag indicating if job is currently available
     * Note: Optional because field defaults to true
     */
    @Field(() => Boolean, {nullable:false,defaultValue:true,description:'Flag indicating if job is currently available\nNote: Optional because field defaults to true'})
    availability!: boolean;

    /**
     * Timestamp of job creation
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of job creation'})
    createdAt!: Date;

    /**
     * Identifier of user who created the job
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who created the job'})
    createdBy!: bigint | null;

    /**
     * Timestamp of last update
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of last update'})
    updatedAt!: Date | null;

    /**
     * Identifier of user who last updated the job
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who last updated the job'})
    updatedBy!: bigint | null;

    /**
     * Tasks associated with this workshop job
     */
    @Field(() => [Task], {nullable:true,description:'Tasks associated with this workshop job'})
    @Type(() => Task)
    tasks?: Array<Task>;

    /**
     * Job details
     */
    @Field(() => Job, {nullable:false,description:'Job details'})
    @Type(() => Job)
    job?: Job;

    /**
     * Workshop offering this job
     */
    @Field(() => Workshop, {nullable:false,description:'Workshop offering this job'})
    @Type(() => Workshop)
    workshop?: Workshop;

    @Field(() => WorkshopJobCount, {nullable:false})
    _count?: WorkshopJobCount;
}
