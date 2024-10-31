import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobCategoryCreateNestedOneWithoutChildrenInput } from './job-category-create-nested-one-without-children.input';
import { JobCategoryCreateNestedManyWithoutChildInput } from './job-category-create-nested-many-without-child.input';
import { WorkshopJobCategoryCreateNestedManyWithoutJobCategoryInput } from '../workshop-job-category/workshop-job-category-create-nested-many-without-job-category.input';

@InputType()
export class JobCategoryCreateWithoutJobsInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    categoryId?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isPopular?: boolean;

    @Field(() => JobCategoryCreateNestedOneWithoutChildrenInput, {nullable:true})
    child?: JobCategoryCreateNestedOneWithoutChildrenInput;

    @Field(() => JobCategoryCreateNestedManyWithoutChildInput, {nullable:true})
    children?: JobCategoryCreateNestedManyWithoutChildInput;

    @Field(() => WorkshopJobCategoryCreateNestedManyWithoutJobCategoryInput, {nullable:true})
    jobCategoryWorkshops?: WorkshopJobCategoryCreateNestedManyWithoutJobCategoryInput;
}