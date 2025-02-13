import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutParentInput } from './job-category-create-without-parent.input';
import { HideField } from '@nestjs/graphql';
import { JobCategoryCreateOrConnectWithoutParentInput } from './job-category-create-or-connect-without-parent.input';
import { JobCategoryCreateManyParentInputEnvelope } from './job-category-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class JobCategoryCreateNestedManyWithoutParentInput {

    @Field(() => [JobCategoryWhereUniqueInput], {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId' | 'name'>>;
}