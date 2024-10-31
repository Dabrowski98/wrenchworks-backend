import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryUpdateWithoutJobsInput } from './job-category-update-without-jobs.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateWithoutJobsInput } from './job-category-create-without-jobs.input';
import { JobCategoryWhereInput } from './job-category-where.input';

@InputType()
export class JobCategoryUpsertWithoutJobsInput {

    @Field(() => JobCategoryUpdateWithoutJobsInput, {nullable:false})
    @Type(() => JobCategoryUpdateWithoutJobsInput)
    update!: JobCategoryUpdateWithoutJobsInput;

    @Field(() => JobCategoryCreateWithoutJobsInput, {nullable:false})
    @Type(() => JobCategoryCreateWithoutJobsInput)
    create!: JobCategoryCreateWithoutJobsInput;

    @Field(() => JobCategoryWhereInput, {nullable:true})
    @Type(() => JobCategoryWhereInput)
    where?: JobCategoryWhereInput;
}
