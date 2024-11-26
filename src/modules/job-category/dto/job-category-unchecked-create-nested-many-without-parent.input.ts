import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutParentInput } from './job-category-create-without-parent.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobCategoryCreateOrConnectWithoutParentInput } from './job-category-create-or-connect-without-parent.input';
import { JobCategoryCreateManyParentInputEnvelope } from './job-category-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';

@InputType()
export class JobCategoryUncheckedCreateNestedManyWithoutParentInput {

    @Field(() => [JobCategoryCreateWithoutParentInput], {nullable:true})
    @Type(() => JobCategoryCreateWithoutParentInput)
    @ValidateNested()
    create?: Array<JobCategoryCreateWithoutParentInput>;

    @Field(() => [JobCategoryCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => JobCategoryCreateOrConnectWithoutParentInput)
    @ValidateNested()
    connectOrCreate?: Array<JobCategoryCreateOrConnectWithoutParentInput>;

    @Field(() => JobCategoryCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => JobCategoryCreateManyParentInputEnvelope)
    @ValidateNested()
    createMany?: JobCategoryCreateManyParentInputEnvelope;

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;
}
