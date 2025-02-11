import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCategoryCreateWithoutChildrenInput } from './job-category-create-without-children.input';
import { HideField } from '@nestjs/graphql';
import { JobCategoryCreateOrConnectWithoutChildrenInput } from './job-category-create-or-connect-without-children.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class JobCategoryCreateNestedOneWithoutChildrenInput {

    @HideField()
    create?: JobCategoryCreateWithoutChildrenInput;

    @HideField()
    connectOrCreate?: JobCategoryCreateOrConnectWithoutChildrenInput;

    @Field(() => JobCategoryWhereUniqueInput, {nullable:true})
    @Type(() => JobCategoryWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId' | 'name'>;
}
