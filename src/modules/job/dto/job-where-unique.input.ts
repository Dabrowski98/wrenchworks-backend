import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobWhereInput } from './job-where.input';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';
import { JobCategoryRelationFilter } from '../../job-category/dto/job-category-relation-filter.input';
import { ServiceRequestListRelationFilter } from '../../service-request/dto/service-request-list-relation-filter.input';
import { Type } from 'class-transformer';
import { WorkshopJobListRelationFilter } from '../../workshop-job/dto/workshop-job-list-relation-filter.input';

@InputType()
export class JobWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    jobId?: bigint | number;

    @Field(() => [JobWhereInput], {nullable:true})
    AND?: Array<JobWhereInput>;

    @Field(() => [JobWhereInput], {nullable:true})
    OR?: Array<JobWhereInput>;

    @Field(() => [JobWhereInput], {nullable:true})
    NOT?: Array<JobWhereInput>;

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
