import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutJobCategoryInput } from './job-create-without-job-category.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobCreateOrConnectWithoutJobCategoryInput } from './job-create-or-connect-without-job-category.input';
import { JobCreateManyJobCategoryInputEnvelope } from './job-create-many-job-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';

@InputType()
export class JobUncheckedCreateNestedManyWithoutJobCategoryInput {

    @Field(() => [JobCreateWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobCreateWithoutJobCategoryInput)
    @ValidateNested()
    create?: Array<JobCreateWithoutJobCategoryInput>;

    @Field(() => [JobCreateOrConnectWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobCreateOrConnectWithoutJobCategoryInput)
    @ValidateNested()
    connectOrCreate?: Array<JobCreateOrConnectWithoutJobCategoryInput>;

    @Field(() => JobCreateManyJobCategoryInputEnvelope, {nullable:true})
    @Type(() => JobCreateManyJobCategoryInputEnvelope)
    @ValidateNested()
    createMany?: JobCreateManyJobCategoryInputEnvelope;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId' | 'name'>>;
}
