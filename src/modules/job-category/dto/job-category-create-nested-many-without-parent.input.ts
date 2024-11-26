import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutParentInput } from './job-category-create-without-parent.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobCategoryCreateOrConnectWithoutParentInput } from './job-category-create-or-connect-without-parent.input';
import { HideField } from '@nestjs/graphql';
import { JobCategoryCreateManyParentInputEnvelope } from './job-category-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';

@InputType()
export class JobCategoryCreateNestedManyWithoutParentInput {

    @Field(() => [JobCategoryCreateWithoutParentInput], {nullable:true})
    @Type(() => JobCategoryCreateWithoutParentInput)
    @ValidateNested()
    create?: Array<JobCategoryCreateWithoutParentInput>;

    @HideField()
    connectOrCreate?: Array<JobCategoryCreateOrConnectWithoutParentInput>;

    @Field(() => JobCategoryCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => JobCategoryCreateManyParentInputEnvelope)
    @ValidateNested()
    createMany?: JobCategoryCreateManyParentInputEnvelope;

    @HideField()
    connect?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>>;
}
