import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutJobsInput } from './job-category-create-without-jobs.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateOrConnectWithoutJobsInput } from './job-category-create-or-connect-without-jobs.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';

@InputType()
export class JobCategoryCreateNestedOneWithoutJobsInput {

    @Field(() => JobCategoryCreateOrConnectWithoutJobsInput, {nullable:true})
    @Type(() => JobCategoryCreateOrConnectWithoutJobsInput)
    connectOrCreate?: JobCategoryCreateOrConnectWithoutJobsInput;
    
}