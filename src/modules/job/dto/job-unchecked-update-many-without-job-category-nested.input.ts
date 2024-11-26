import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutJobCategoryInput } from './job-create-without-job-category.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobCreateOrConnectWithoutJobCategoryInput } from './job-create-or-connect-without-job-category.input';
import { JobUpsertWithWhereUniqueWithoutJobCategoryInput } from './job-upsert-with-where-unique-without-job-category.input';
import { JobCreateManyJobCategoryInputEnvelope } from './job-create-many-job-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateWithWhereUniqueWithoutJobCategoryInput } from './job-update-with-where-unique-without-job-category.input';
import { JobUpdateManyWithWhereWithoutJobCategoryInput } from './job-update-many-with-where-without-job-category.input';
import { JobScalarWhereInput } from './job-scalar-where.input';

@InputType()
export class JobUncheckedUpdateManyWithoutJobCategoryNestedInput {

    @Field(() => [JobCreateWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobCreateWithoutJobCategoryInput)
    @ValidateNested()
    create?: Array<JobCreateWithoutJobCategoryInput>;

    @Field(() => [JobCreateOrConnectWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobCreateOrConnectWithoutJobCategoryInput)
    @ValidateNested()
    connectOrCreate?: Array<JobCreateOrConnectWithoutJobCategoryInput>;

    @Field(() => [JobUpsertWithWhereUniqueWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobUpsertWithWhereUniqueWithoutJobCategoryInput)
    @ValidateNested()
    upsert?: Array<JobUpsertWithWhereUniqueWithoutJobCategoryInput>;

    @Field(() => JobCreateManyJobCategoryInputEnvelope, {nullable:true})
    @Type(() => JobCreateManyJobCategoryInputEnvelope)
    @ValidateNested()
    createMany?: JobCreateManyJobCategoryInputEnvelope;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;

    @Field(() => [JobUpdateWithWhereUniqueWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobUpdateWithWhereUniqueWithoutJobCategoryInput)
    @ValidateNested()
    update?: Array<JobUpdateWithWhereUniqueWithoutJobCategoryInput>;

    @Field(() => [JobUpdateManyWithWhereWithoutJobCategoryInput], {nullable:true})
    @Type(() => JobUpdateManyWithWhereWithoutJobCategoryInput)
    @ValidateNested()
    updateMany?: Array<JobUpdateManyWithWhereWithoutJobCategoryInput>;

    @Field(() => [JobScalarWhereInput], {nullable:true})
    @Type(() => JobScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<JobScalarWhereInput>;
}
