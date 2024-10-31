import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { JobCreateWithoutJobCategoryInput } from './job-create-without-job-category.input';

@InputType()
export class JobCreateOrConnectWithoutJobCategoryInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>;

    @Field(() => JobCreateWithoutJobCategoryInput, {nullable:false})
    @Type(() => JobCreateWithoutJobCategoryInput)
    create!: JobCreateWithoutJobCategoryInput;
}
