import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutJobsInput } from './job-category-create-without-jobs.input';
import { HideField } from '@nestjs/graphql';
import { JobCategoryCreateOrConnectWithoutJobsInput } from './job-category-create-or-connect-without-jobs.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class JobCategoryCreateNestedOneWithoutJobsInput {

    @Field(() => JobCategoryWhereUniqueInput, {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;
}