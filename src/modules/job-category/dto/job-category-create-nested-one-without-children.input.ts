import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutChildrenInput } from './job-category-create-without-children.input';
import { Type } from 'class-transformer';
import { JobCategoryCreateOrConnectWithoutChildrenInput } from './job-category-create-or-connect-without-children.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';

@InputType()
export class JobCategoryCreateNestedOneWithoutChildrenInput {

    @Field(() => JobCategoryCreateWithoutChildrenInput, {nullable:true})
    @Type(() => JobCategoryCreateWithoutChildrenInput)
    create?: JobCategoryCreateWithoutChildrenInput;

    @Field(() => JobCategoryCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => JobCategoryCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: JobCategoryCreateOrConnectWithoutChildrenInput;

    @Field(() => JobCategoryWhereUniqueInput, {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId'>;
}
