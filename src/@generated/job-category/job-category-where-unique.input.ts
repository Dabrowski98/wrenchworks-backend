import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobCategoryWhereInput } from './job-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JobCategoryNullableRelationFilter } from './job-category-nullable-relation-filter.input';
import { JobCategoryListRelationFilter } from './job-category-list-relation-filter.input';
import { JobListRelationFilter } from '../job/job-list-relation-filter.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryListRelationFilter } from '../workshop-job-category/workshop-job-category-list-relation-filter.input';

@InputType()
export class JobCategoryWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    categoryId?: bigint | number;

    @Field(() => [JobCategoryWhereInput], {nullable:true})
    AND?: Array<JobCategoryWhereInput>;

    @Field(() => [JobCategoryWhereInput], {nullable:true})
    OR?: Array<JobCategoryWhereInput>;

    @Field(() => [JobCategoryWhereInput], {nullable:true})
    NOT?: Array<JobCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    parentId?: BigIntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPopular?: BoolFilter;

    @Field(() => JobCategoryNullableRelationFilter, {nullable:true})
    child?: JobCategoryNullableRelationFilter;

    @Field(() => JobCategoryListRelationFilter, {nullable:true})
    children?: JobCategoryListRelationFilter;

    @Field(() => JobListRelationFilter, {nullable:true})
    @Type(() => JobListRelationFilter)
    jobs?: JobListRelationFilter;

    @Field(() => WorkshopJobCategoryListRelationFilter, {nullable:true})
    jobCategoryWorkshops?: WorkshopJobCategoryListRelationFilter;
}
