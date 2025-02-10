import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { JobCategoryCreateNestedOneWithoutChildrenInput } from './job-category-create-nested-one-without-children.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { JobCreateNestedManyWithoutJobCategoryInput } from '../../job/dto/job-create-nested-many-without-job-category.input';
import { WorkshopCreateNestedManyWithoutJobCategoriesInput } from '../../workshop/dto/workshop-create-nested-many-without-job-categories.input';

@InputType()
export class JobCategoryCreateWithoutChildrenInput {

    @HideField()
    categoryId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Name must be a string' })
    @Validator.Length(2, 50, { message: 'Name must be between 2 and 50 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    name!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 500, { message: 'Description cannot exceed 500 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is popular must be a boolean' })
    @Validator.IsOptional()
    isPopular?: boolean;

    @Field(() => JobCategoryCreateNestedOneWithoutChildrenInput, {nullable:true})
    @ValidateNested()
    @Type(() => JobCategoryCreateNestedOneWithoutChildrenInput)
    parent?: JobCategoryCreateNestedOneWithoutChildrenInput;

    @HideField()
    jobs?: JobCreateNestedManyWithoutJobCategoryInput;

    @HideField()
    workshops?: WorkshopCreateNestedManyWithoutJobCategoriesInput;
}
