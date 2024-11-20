import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { JobCategoryUpdateOneWithoutChildrenNestedInput } from './job-category-update-one-without-children-nested.input';
import { JobUpdateManyWithoutJobCategoryNestedInput } from '../../job/dto/job-update-many-without-job-category-nested.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateManyWithoutJobCategoriesNestedInput } from '../../workshop/dto/workshop-update-many-without-job-categories-nested.input';


@InputType()
export class JobCategoryUpdateWithoutChildrenInput {

    @HideField()
    categoryId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Name must be a string' })
    @Validator.IsNotEmpty({ message: 'Name is required' })
    @Validator.Length(2, 50, { message: 'Name must be between 2 and 50 characters' })
    name?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 500, { message: 'Description cannot exceed 500 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is popular must be a boolean' })
    isPopular?: boolean;

    @Field(() => JobCategoryUpdateOneWithoutChildrenNestedInput, {nullable:true})
    child?: JobCategoryUpdateOneWithoutChildrenNestedInput;

    @Field(() => JobUpdateManyWithoutJobCategoryNestedInput, {nullable:true})
    @Type(() => JobUpdateManyWithoutJobCategoryNestedInput)
    jobs?: JobUpdateManyWithoutJobCategoryNestedInput;

    @Field(() => WorkshopUpdateManyWithoutJobCategoriesNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateManyWithoutJobCategoriesNestedInput)
    Workshops?: WorkshopUpdateManyWithoutJobCategoriesNestedInput;
}
