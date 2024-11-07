import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JobCategoryRelationFilter } from '../job-category/job-category-relation-filter.input';
import { ServiceRequestListRelationFilter } from '../service-request/service-request-list-relation-filter.input';
import { Type } from 'class-transformer';
import { WorkshopJobListRelationFilter } from '../workshop-job/workshop-job-list-relation-filter.input';

@InputType()
export class JobWhereInput {

    @Field(() => [JobWhereInput], {nullable:true})
    AND?: Array<JobWhereInput>;

    @Field(() => [JobWhereInput], {nullable:true})
    OR?: Array<JobWhereInput>;

    @Field(() => [JobWhereInput], {nullable:true})
    NOT?: Array<JobWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    jobId?: BigIntFilter;

    @Field(() => BigIntFilter, {nullable:true})
    categoryId?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPopular?: BoolFilter;

    @Field(() => JobCategoryRelationFilter, {nullable:true})
    jobCategory?: JobCategoryRelationFilter;

    @Field(() => ServiceRequestListRelationFilter, {nullable:true})
    @Type(() => ServiceRequestListRelationFilter)
    serviceRequests?: ServiceRequestListRelationFilter;

    @Field(() => WorkshopJobListRelationFilter, {nullable:true})
    @Type(() => WorkshopJobListRelationFilter)
    jobWorkshops?: WorkshopJobListRelationFilter;
}
