import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { JobCategoryCreateNestedOneWithoutChildrenInput } from './job-category-create-nested-one-without-children.input';
import { JobCategoryCreateNestedManyWithoutChildInput } from './job-category-create-nested-many-without-child.input';
import { WorkshopCreateNestedManyWithoutJobCategoriesInput } from '../workshop/workshop-create-nested-many-without-job-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class JobCategoryCreateWithoutJobsInput {

    @HideField()
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

    @Field(() => WorkshopCreateNestedManyWithoutJobCategoriesInput, {nullable:true})
    @Type(() => WorkshopCreateNestedManyWithoutJobCategoriesInput)
    Workshops?: WorkshopCreateNestedManyWithoutJobCategoriesInput;
}
