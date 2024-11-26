import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutParentInput } from './job-category-create-without-parent.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobCategoryCreateOrConnectWithoutParentInput } from './job-category-create-or-connect-without-parent.input';
import { JobCategoryUpsertWithWhereUniqueWithoutParentInput } from './job-category-upsert-with-where-unique-without-parent.input';
import { JobCategoryCreateManyParentInputEnvelope } from './job-category-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { JobCategoryUpdateWithWhereUniqueWithoutParentInput } from './job-category-update-with-where-unique-without-parent.input';
import { JobCategoryUpdateManyWithWhereWithoutParentInput } from './job-category-update-many-with-where-without-parent.input';
import { JobCategoryScalarWhereInput } from './job-category-scalar-where.input';

@InputType()
export class JobCategoryUncheckedUpdateManyWithoutParentNestedInput {

    @Field(() => [JobCategoryCreateWithoutParentInput], {nullable:true})
    @Type(() => JobCategoryCreateWithoutParentInput)
    @ValidateNested()
    create?: Array<JobCategoryCreateWithoutParentInput>;

    @Field(() => [JobCategoryCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => JobCategoryCreateOrConnectWithoutParentInput)
    @ValidateNested()
    connectOrCreate?: Array<JobCategoryCreateOrConnectWithoutParentInput>;

    @Field(() => [JobCategoryUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => JobCategoryUpsertWithWhereUniqueWithoutParentInput)
    @ValidateNested()
    upsert?: Array<JobCategoryUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => JobCategoryCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => JobCategoryCreateManyParentInputEnvelope)
    @ValidateNested()
    createMany?: JobCategoryCreateManyParentInputEnvelope;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;

    @Field(() => [JobCategoryUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => JobCategoryUpdateWithWhereUniqueWithoutParentInput)
    @ValidateNested()
    update?: Array<JobCategoryUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [JobCategoryUpdateManyWithWhereWithoutParentInput], {nullable:true})
    @Type(() => JobCategoryUpdateManyWithWhereWithoutParentInput)
    @ValidateNested()
    updateMany?: Array<JobCategoryUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [JobCategoryScalarWhereInput], {nullable:true})
    @Type(() => JobCategoryScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<JobCategoryScalarWhereInput>;
}
