import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringFilter } from '../../prisma/dto/string-filter.input';
import { BigIntNullableFilter } from '../../prisma/dto/big-int-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';
import { JobCategoryNullableRelationFilter } from './job-category-nullable-relation-filter.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { JobCategoryListRelationFilter } from './job-category-list-relation-filter.input';
import { JobListRelationFilter } from '../../job/dto/job-list-relation-filter.input';
import { WorkshopListRelationFilter } from '../../workshop/dto/workshop-list-relation-filter.input';

@InputType()
export class JobCategoryWhereInput {

    @Field(() => [JobCategoryWhereInput], {nullable:true})
    AND?: Array<JobCategoryWhereInput>;

    @Field(() => [JobCategoryWhereInput], {nullable:true})
    OR?: Array<JobCategoryWhereInput>;

    @Field(() => [JobCategoryWhereInput], {nullable:true})
    NOT?: Array<JobCategoryWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    categoryId?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    parentId?: BigIntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPopular?: BoolFilter;

    @Field(() => JobCategoryNullableRelationFilter, {nullable:true})
    @ValidateNested()
    @Type(() => JobCategoryNullableRelationFilter)
    parent?: JobCategoryNullableRelationFilter;

    @Field(() => JobCategoryListRelationFilter, {nullable:true})
    @ValidateNested()
    @Type(() => JobCategoryListRelationFilter)
    children?: JobCategoryListRelationFilter;

    @Field(() => JobListRelationFilter, {nullable:true})
    @Type(() => JobListRelationFilter)
    @ValidateNested()
    @Type(() => JobListRelationFilter)
    jobs?: JobListRelationFilter;

    @Field(() => WorkshopListRelationFilter, {nullable:true})
    @Type(() => WorkshopListRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopListRelationFilter)
    workshops?: WorkshopListRelationFilter;
}
