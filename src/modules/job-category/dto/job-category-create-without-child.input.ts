import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { JobCategoryCreateNestedManyWithoutChildInput } from './job-category-create-nested-many-without-child.input';
import { JobCreateNestedManyWithoutJobCategoryInput } from '../../job/dto/job-create-nested-many-without-job-category.input';
import { Type } from 'class-transformer';
import { WorkshopCreateNestedManyWithoutJobCategoriesInput } from '../../workshop/dto/workshop-create-nested-many-without-job-categories.input';


@InputType()
export class JobCategoryCreateWithoutChildInput {

    @HideField()
    categoryId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Name must be a string' })
    @Validator.IsNotEmpty({ message: 'Name is required' })
    @Validator.Length(2, 50, { message: 'Name must be between 2 and 50 characters' })
    name!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 500, { message: 'Description cannot exceed 500 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is popular must be a boolean' })
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
