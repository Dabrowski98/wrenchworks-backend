import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Task } from '../../task/dto/task.model';
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

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    availability!: boolean;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => Job, {nullable:false})
    job?: Job;

    @Field(() => Workshop, {nullable:false})
    workshop?: Workshop;

    @Field(() => WorkshopJobCount, {nullable:false})
    _count?: WorkshopJobCount;
}
