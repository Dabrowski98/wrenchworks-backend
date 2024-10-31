import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutJobCategoryInput } from './job-create-without-job-category.input';
import { Type } from 'class-transformer';
import { JobCreateOrConnectWithoutJobCategoryInput } from './job-create-or-connect-without-job-category.input';
import { JobCreateManyJobCategoryInputEnvelope } from './job-create-many-job-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';

@InputType()
export class JobCreateNestedManyWithoutJobCategoryInput {

    @Field(() => [JobCreateWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobCreateWithoutJobCategoryInput)
    create?: Array<JobCreateWithoutJobCategoryInput>;

    @Field(() => [JobCreateOrConnectWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobCreateOrConnectWithoutJobCategoryInput)
    connectOrCreate?: Array<JobCreateOrConnectWithoutJobCategoryInput>;

    @Field(() => JobCreateManyJobCategoryInputEnvelope, {nullable:true})
    @Type(() => JobCreateManyJobCategoryInputEnvelope)
    createMany?: JobCreateManyJobCategoryInputEnvelope;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;
}
