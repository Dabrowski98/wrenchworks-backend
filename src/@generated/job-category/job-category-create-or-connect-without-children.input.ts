import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateWithoutChildrenInput } from './job-category-create-without-children.input';

@InputType()
export class JobCategoryCreateOrConnectWithoutChildrenInput {

    @Field(() => JobCategoryWhereUniqueInput, {nullable:false})
    @Type(() => JobCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;

    @Field(() => JobCategoryCreateWithoutChildrenInput, {nullable:false})
    @Type(() => JobCategoryCreateWithoutChildrenInput)
    create!: JobCategoryCreateWithoutChildrenInput;
}
