import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { JobUpdateWithoutJobCategoryInput } from './job-update-without-job-category.input';

@InputType()
export class JobUpdateWithWhereUniqueWithoutJobCategoryInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>;

    @Field(() => JobUpdateWithoutJobCategoryInput, {nullable:false})
    @Type(() => JobUpdateWithoutJobCategoryInput)
    data!: JobUpdateWithoutJobCategoryInput;
}
