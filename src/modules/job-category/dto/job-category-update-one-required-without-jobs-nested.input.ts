import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutJobsInput } from './job-category-create-without-jobs.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobCategoryCreateOrConnectWithoutJobsInput } from './job-category-create-or-connect-without-jobs.input';
import { JobCategoryUpsertWithoutJobsInput } from './job-category-upsert-without-jobs.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { JobCategoryUpdateToOneWithWhereWithoutJobsInput } from './job-category-update-to-one-with-where-without-jobs.input';

@InputType()
export class JobCategoryUpdateOneRequiredWithoutJobsNestedInput {

    @Field(() => JobCategoryCreateWithoutJobsInput, {nullable:true})
    @Type(() => JobCategoryCreateWithoutJobsInput)
    @ValidateNested()
    create?: JobCategoryCreateWithoutJobsInput;

    @Field(() => JobCategoryCreateOrConnectWithoutJobsInput, {nullable:true})
    @Type(() => JobCategoryCreateOrConnectWithoutJobsInput)
    @ValidateNested()
    connectOrCreate?: JobCategoryCreateOrConnectWithoutJobsInput;

    @Field(() => JobCategoryUpsertWithoutJobsInput, {nullable:true})
    @Type(() => JobCategoryUpsertWithoutJobsInput)
    @ValidateNested()
    upsert?: JobCategoryUpsertWithoutJobsInput;

    @Field(() => JobCategoryWhereUniqueInput, {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId' | 'name'>;

    @Field(() => JobCategoryUpdateToOneWithWhereWithoutJobsInput, {nullable:true})
    @Type(() => JobCategoryUpdateToOneWithWhereWithoutJobsInput)
    @ValidateNested()
    update?: JobCategoryUpdateToOneWithWhereWithoutJobsInput;
}
