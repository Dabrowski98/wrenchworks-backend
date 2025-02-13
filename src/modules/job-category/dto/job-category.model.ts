import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Type } from 'class-transformer';
import { Job } from '../../job/dto/job.model';
import { Workshop } from '../../workshop/dto/workshop.model';
import { JobCategoryCount } from './job-category-count.output';

/**
 * This model represents a JobCategory that groups jobs into different categories based on their type.
 * It supports hierarchical relationships to allow subcategories and organized classification of jobs.
 */
@ObjectType({description:'This model represents a JobCategory that groups jobs into different categories based on their type.\nIt supports hierarchical relationships to allow subcategories and organized classification of jobs.'})
export class JobCategory {

    /**
     * Identifier of the job category
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the job category'})
    categoryId!: bigint;

    /**
     * Name of the category
     */
    @Field(() => String, {nullable:false,description:'Name of the category'})
    name!: string;

    /**
     * Identifier of the parent category
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of the parent category'})
    parentId!: bigint | null;

    /**
     * Description of the category
     */
    @Field(() => String, {nullable:true,description:'Description of the category'})
    description!: string | null;

    /**
     * Popularity flag for the category
     * Note: Optional because field defaults to false
     */
    @Field(() => Boolean, {nullable:false,defaultValue:false,description:'Popularity flag for the category\nNote: Optional because field defaults to false'})
    isPopular!: boolean;

    /**
     * Parent category reference
     */
    @Field(() => JobCategory, {nullable:true,description:'Parent category reference'})
    @Type(() => JobCategory)
    parent?: JobCategory | null;

    /**
     * Child categories
     */
    @Field(() => [JobCategory], {nullable:true,description:'Child categories'})
    @Type(() => JobCategory)
    children?: Array<JobCategory>;

    /**
     * Jobs in this category
     */
    @Field(() => [Job], {nullable:true,description:'Jobs in this category'})
    @Type(() => Job)
    jobs?: Array<Job>;

    /**
     * Workshops associated with this category
     */
    @Field(() => [Workshop], {nullable:true,description:'Workshops associated with this category'})
    @Type(() => Workshop)
    workshops?: Array<Workshop>;

    @Field(() => JobCategoryCount, {nullable:false})
    _count?: JobCategoryCount;
}
