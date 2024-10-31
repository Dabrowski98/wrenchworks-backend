import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Job } from '../job/job.model';
import { WorkshopJobCategory } from '../workshop-job-category/workshop-job-category.model';
import { JobCategoryCount } from './job-category-count.output';

@ObjectType()
export class JobCategory {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    categoryId!: bigint;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    parentId!: bigint | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPopular!: boolean;

    @Field(() => JobCategory, {nullable:true})
    child?: JobCategory | null;

    @Field(() => [JobCategory], {nullable:true})
    children?: Array<JobCategory>;

    @Field(() => [Job], {nullable:true})
    jobs?: Array<Job>;

    @Field(() => [WorkshopJobCategory], {nullable:true})
    jobCategoryWorkshops?: Array<WorkshopJobCategory>;

    @Field(() => JobCategoryCount, {nullable:false})
    _count?: JobCategoryCount;
}
