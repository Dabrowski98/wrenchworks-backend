import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobCategoryUncheckedCreateNestedManyWithoutChildInput } from './job-category-unchecked-create-nested-many-without-child.input';
import { JobUncheckedCreateNestedManyWithoutJobCategoryInput } from '../job/job-unchecked-create-nested-many-without-job-category.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryUncheckedCreateNestedManyWithoutJobCategoryInput } from '../workshop-job-category/workshop-job-category-unchecked-create-nested-many-without-job-category.input';

@InputType()
export class JobCategoryUncheckedCreateWithoutChildInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    categoryId?: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isPopular?: boolean;

    @Field(() => JobCategoryUncheckedCreateNestedManyWithoutChildInput, {nullable:true})
    children?: JobCategoryUncheckedCreateNestedManyWithoutChildInput;

    @Field(() => JobUncheckedCreateNestedManyWithoutJobCategoryInput, {nullable:true})
    @Type(() => JobUncheckedCreateNestedManyWithoutJobCategoryInput)
    jobs?: JobUncheckedCreateNestedManyWithoutJobCategoryInput;

    @Field(() => WorkshopJobCategoryUncheckedCreateNestedManyWithoutJobCategoryInput, {nullable:true})
    jobCategoryWorkshops?: WorkshopJobCategoryUncheckedCreateNestedManyWithoutJobCategoryInput;
}
