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

@ObjectType()
export class WorkshopJob {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopJobId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    jobId!: bigint;

    @Field(() => String, {nullable:true})
    workshopJobDescription!: string | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    minPrice!: Decimal | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    maxPrice!: Decimal | null;

    /**
     * Note: Optional because field defaults to true
     */
    @Field(() => Boolean, {nullable:false,defaultValue:true,description:'Note: Optional because field defaults to true'})
    availability!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:true})
    updatedBy!: bigint | null;

    @Field(() => [Task], {nullable:true})
    @Type(() => Task)
    tasks?: Array<Task>;

    @Field(() => Job, {nullable:false})
    @Type(() => Job)
    job?: Job;

    @Field(() => Workshop, {nullable:false})
    @Type(() => Workshop)
    workshop?: Workshop;

    @Field(() => WorkshopJobCount, {nullable:false})
    _count?: WorkshopJobCount;
}
