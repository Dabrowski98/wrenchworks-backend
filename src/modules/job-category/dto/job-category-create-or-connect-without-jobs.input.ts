import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateWithoutJobsInput } from './job-category-create-without-jobs.input';

@InputType()
export class JobCategoryCreateOrConnectWithoutJobsInput {

    @Field(() => JobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => JobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;

    @Field(() => JobCategoryCreateWithoutJobsInput, {nullable:false})
    @Type(() => JobCategoryCreateWithoutJobsInput)
    create!: JobCategoryCreateWithoutJobsInput;
}
