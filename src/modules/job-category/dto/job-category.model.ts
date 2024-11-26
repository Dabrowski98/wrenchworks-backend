import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Type } from 'class-transformer';
import { Job } from '../../job/dto/job.model';
import { Workshop } from '../../workshop/dto/workshop.model';
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

    /**
     * Note: Optional because field defaults to false
     */
    @Field(() => Boolean, {nullable:false,defaultValue:false,description:'Note: Optional because field defaults to false'})
    isPopular!: boolean;

    @Field(() => JobCategory, {nullable:true})
    @Type(() => JobCategory)
    parent?: JobCategory | null;

    @Field(() => [JobCategory], {nullable:true})
    @Type(() => JobCategory)
    children?: Array<JobCategory>;

    @Field(() => [Job], {nullable:true})
    @Type(() => Job)
    jobs?: Array<Job>;

    @Field(() => [Workshop], {nullable:true})
    @Type(() => Workshop)
    workshops?: Array<Workshop>;

    @Field(() => JobCategoryCount, {nullable:false})
    _count?: JobCategoryCount;
}
