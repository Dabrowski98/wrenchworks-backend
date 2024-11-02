import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobCategoryCreateNestedManyWithoutChildInput } from './job-category-create-nested-many-without-child.input';
import { JobCreateNestedManyWithoutJobCategoryInput } from '../job/job-create-nested-many-without-job-category.input';
import { Type } from 'class-transformer';
import { WorkshopCreateNestedManyWithoutJobCategoriesInput } from '../workshop/workshop-create-nested-many-without-job-categories.input';

@InputType()
export class JobCategoryCreateWithoutChildInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    categoryId?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isPopular?: boolean;

    @Field(() => JobCategoryCreateNestedManyWithoutChildInput, {nullable:true})
    children?: JobCategoryCreateNestedManyWithoutChildInput;

    @Field(() => JobCreateNestedManyWithoutJobCategoryInput, {nullable:true})
    @Type(() => JobCreateNestedManyWithoutJobCategoryInput)
    jobs?: JobCreateNestedManyWithoutJobCategoryInput;

    @Field(() => WorkshopCreateNestedManyWithoutJobCategoriesInput, {nullable:true})
    @Type(() => WorkshopCreateNestedManyWithoutJobCategoriesInput)
    Workshops?: WorkshopCreateNestedManyWithoutJobCategoriesInput;
}
