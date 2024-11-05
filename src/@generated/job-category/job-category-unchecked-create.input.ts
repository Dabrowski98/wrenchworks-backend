import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobCategoryUncheckedCreateNestedManyWithoutChildInput } from './job-category-unchecked-create-nested-many-without-child.input';
import { JobUncheckedCreateNestedManyWithoutJobCategoryInput } from '../job/job-unchecked-create-nested-many-without-job-category.input';
import { Type } from 'class-transformer';
import { WorkshopUncheckedCreateNestedManyWithoutJobCategoriesInput } from '../workshop/workshop-unchecked-create-nested-many-without-job-categories.input';

@InputType()
export class JobCategoryUncheckedCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    categoryId?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    parentId?: bigint | number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isPopular?: boolean;

    @Field(() => JobCategoryUncheckedCreateNestedManyWithoutChildInput, {nullable:true})
    children?: JobCategoryUncheckedCreateNestedManyWithoutChildInput;

    @Field(() => JobUncheckedCreateNestedManyWithoutJobCategoryInput, {nullable:true})
    @Type(() => JobUncheckedCreateNestedManyWithoutJobCategoryInput)
    jobs?: JobUncheckedCreateNestedManyWithoutJobCategoryInput;

    @Field(() => WorkshopUncheckedCreateNestedManyWithoutJobCategoriesInput, {nullable:true})
    @Type(() => WorkshopUncheckedCreateNestedManyWithoutJobCategoriesInput)
    Workshops?: WorkshopUncheckedCreateNestedManyWithoutJobCategoriesInput;
}
