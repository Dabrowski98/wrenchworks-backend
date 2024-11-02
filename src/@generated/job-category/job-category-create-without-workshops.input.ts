import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobCategoryCreateNestedOneWithoutChildrenInput } from './job-category-create-nested-one-without-children.input';
import { JobCategoryCreateNestedManyWithoutChildInput } from './job-category-create-nested-many-without-child.input';
import { JobCreateNestedManyWithoutJobCategoryInput } from '../job/job-create-nested-many-without-job-category.input';
import { Type } from 'class-transformer';

@InputType()
export class JobCategoryCreateWithoutWorkshopsInput {

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

    @Field(() => JobCreateNestedManyWithoutJobCategoryInput, {nullable:true})
    @Type(() => JobCreateNestedManyWithoutJobCategoryInput)
    jobs?: JobCreateNestedManyWithoutJobCategoryInput;
}
