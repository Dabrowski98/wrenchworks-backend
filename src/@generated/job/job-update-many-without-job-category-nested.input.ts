import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutJobCategoryInput } from './job-create-without-job-category.input';
import { Type } from 'class-transformer';
import { JobCreateOrConnectWithoutJobCategoryInput } from './job-create-or-connect-without-job-category.input';
import { JobUpsertWithWhereUniqueWithoutJobCategoryInput } from './job-upsert-with-where-unique-without-job-category.input';
import { JobCreateManyJobCategoryInputEnvelope } from './job-create-many-job-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithWhereUniqueWithoutJobCategoryInput } from './job-update-with-where-unique-without-job-category.input';
import { JobUpdateManyWithWhereWithoutJobCategoryInput } from './job-update-many-with-where-without-job-category.input';
import { JobScalarWhereInput } from './job-scalar-where.input';

@InputType()
export class JobUpdateManyWithoutJobCategoryNestedInput {

    @Field(() => [JobCreateWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobCreateWithoutJobCategoryInput)
    create?: Array<JobCreateWithoutJobCategoryInput>;

    @Field(() => [JobCreateOrConnectWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobCreateOrConnectWithoutJobCategoryInput)
    connectOrCreate?: Array<JobCreateOrConnectWithoutJobCategoryInput>;

    @Field(() => [JobUpsertWithWhereUniqueWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobUpsertWithWhereUniqueWithoutJobCategoryInput)
    upsert?: Array<JobUpsertWithWhereUniqueWithoutJobCategoryInput>;

    @Field(() => JobCreateManyJobCategoryInputEnvelope, {nullable:true})
    @Type(() => JobCreateManyJobCategoryInputEnvelope)
    createMany?: JobCreateManyJobCategoryInputEnvelope;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    set?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobUpdateWithWhereUniqueWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobUpdateWithWhereUniqueWithoutJobCategoryInput)
    update?: Array<JobUpdateWithWhereUniqueWithoutJobCategoryInput>;

    @Field(() => [JobUpdateManyWithWhereWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobUpdateManyWithWhereWithoutJobCategoryInput)
    updateMany?: Array<JobUpdateManyWithWhereWithoutJobCategoryInput>;

    @Field(() => [JobScalarWhereInput], {nullable:true})
    @Type(() => JobScalarWhereInput)
    deleteMany?: Array<JobScalarWhereInput>;
}
