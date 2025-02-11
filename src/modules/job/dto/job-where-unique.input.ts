import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { JobWhereInput } from './job-where.input';
import { BigIntFilter } from '../../prisma/dto/big-int-filter.input';
import { StringNullableFilter } from '../../prisma/dto/string-nullable-filter.input';
import { BoolFilter } from '../../prisma/dto/bool-filter.input';
import { JobCategoryRelationFilter } from '../../job-category/dto/job-category-relation-filter.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ServiceRequestListRelationFilter } from '../../service-request/dto/service-request-list-relation-filter.input';
import { WorkshopJobListRelationFilter } from '../../workshop-job/dto/workshop-job-list-relation-filter.input';

@InputType()
export class JobWhereUniqueInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    jobId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Name must be a string' })
    @Validator.Length(2, 50, { message: 'Name must be between 2 and 50 characters' })
    @Validator.IsOptional()
    name?: string;

    @Field(() => [JobWhereInput], {nullable:true})
    AND?: Array<JobWhereInput>;

    @Field(() => [JobWhereInput], {nullable:true})
    OR?: Array<JobWhereInput>;

    @Field(() => [JobWhereInput], {nullable:true})
    NOT?: Array<JobWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    categoryId?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPopular?: BoolFilter;

    @Field(() => JobCategoryRelationFilter, {nullable:true})
    @ValidateNested()
    @Type(() => JobCategoryRelationFilter)
    jobCategory?: JobCategoryRelationFilter;

    @Field(() => ServiceRequestListRelationFilter, {nullable:true})
    @Type(() => ServiceRequestListRelationFilter)
    @ValidateNested()
    @Type(() => ServiceRequestListRelationFilter)
    serviceRequests?: ServiceRequestListRelationFilter;

    @Field(() => WorkshopJobListRelationFilter, {nullable:true})
    @Type(() => WorkshopJobListRelationFilter)
    @ValidateNested()
    @Type(() => WorkshopJobListRelationFilter)
    jobWorkshops?: WorkshopJobListRelationFilter;
}
