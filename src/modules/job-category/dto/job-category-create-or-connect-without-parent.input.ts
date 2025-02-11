import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateWithoutParentInput } from './job-category-create-without-parent.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class JobCategoryCreateOrConnectWithoutParentInput {

    @Field(() => JobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => JobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId' | 'name'>;

    @Field(() => JobCategoryCreateWithoutParentInput, {nullable:false})
    @Type(() => JobCategoryCreateWithoutParentInput)
    @ValidateNested()
    create!: JobCategoryCreateWithoutParentInput;
}
