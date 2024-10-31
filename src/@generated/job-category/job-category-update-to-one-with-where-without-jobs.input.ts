import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryWhereInput } from './job-category-where.input';
import { Type } from 'class-transformer';
import { JobCategoryUpdateWithoutJobsInput } from './job-category-update-without-jobs.input';

@InputType()
export class JobCategoryUpdateToOneWithWhereWithoutJobsInput {

    @Field(() => JobCategoryWhereInput, {nullable:true})
    @Type(() => JobCategoryWhereInput)
    where?: JobCategoryWhereInput;

    @Field(() => JobCategoryUpdateWithoutJobsInput, {nullable:false})
    @Type(() => JobCategoryUpdateWithoutJobsInput)
    data!: JobCategoryUpdateWithoutJobsInput;
}
