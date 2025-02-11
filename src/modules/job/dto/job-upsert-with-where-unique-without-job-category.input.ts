import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { JobUpdateWithoutJobCategoryInput } from './job-update-without-job-category.input';
import { ValidateNested } from 'class-validator';
import { JobCreateWithoutJobCategoryInput } from './job-create-without-job-category.input';

@InputType()
export class JobUpsertWithWhereUniqueWithoutJobCategoryInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: Prisma.AtLeast<JobWhereUniqueInput, 'jobId' | 'name'>;

    @Field(() => JobUpdateWithoutJobCategoryInput, {nullable:false})
    @Type(() => JobUpdateWithoutJobCategoryInput)
    @ValidateNested()
    update!: JobUpdateWithoutJobCategoryInput;

    @Field(() => JobCreateWithoutJobCategoryInput, {nullable:false})
    @Type(() => JobCreateWithoutJobCategoryInput)
    @ValidateNested()
    create!: JobCreateWithoutJobCategoryInput;
}
