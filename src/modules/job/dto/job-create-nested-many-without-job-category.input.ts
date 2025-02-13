import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutJobCategoryInput } from './job-create-without-job-category.input';
import { HideField } from '@nestjs/graphql';
import { JobCreateOrConnectWithoutJobCategoryInput } from './job-create-or-connect-without-job-category.input';
import { JobCreateManyJobCategoryInputEnvelope } from './job-create-many-job-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class JobCreateNestedManyWithoutJobCategoryInput {

    @HideField()
    create?: Array<JobCreateWithoutJobCategoryInput>;

    @HideField()
    connectOrCreate?: Array<JobCreateOrConnectWithoutJobCategoryInput>;

    @HideField()
    createMany?: JobCreateManyJobCategoryInputEnvelope;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId' | 'name'>>;
}
