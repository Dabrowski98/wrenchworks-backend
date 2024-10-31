import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobUncheckedCreateNestedManyWithoutJobCategoryInput } from '../job/job-unchecked-create-nested-many-without-job-category.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryUncheckedCreateNestedManyWithoutJobCategoryInput } from '../workshop-job-category/workshop-job-category-unchecked-create-nested-many-without-job-category.input';

@InputType()
export class JobCategoryUncheckedCreateWithoutChildrenInput {

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

    @Field(() => JobUncheckedCreateNestedManyWithoutJobCategoryInput, {nullable:true})
    @Type(() => JobUncheckedCreateNestedManyWithoutJobCategoryInput)
    jobs?: JobUncheckedCreateNestedManyWithoutJobCategoryInput;

    @Field(() => WorkshopJobCategoryUncheckedCreateNestedManyWithoutJobCategoryInput, {nullable:true})
    jobCategoryWorkshops?: WorkshopJobCategoryUncheckedCreateNestedManyWithoutJobCategoryInput;
}
