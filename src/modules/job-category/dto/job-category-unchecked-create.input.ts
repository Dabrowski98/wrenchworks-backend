import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { JobCategoryUncheckedCreateNestedManyWithoutParentInput } from './job-category-unchecked-create-nested-many-without-parent.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { JobUncheckedCreateNestedManyWithoutJobCategoryInput } from '../../job/dto/job-unchecked-create-nested-many-without-job-category.input';
import { WorkshopUncheckedCreateNestedManyWithoutJobCategoriesInput } from '../../workshop/dto/workshop-unchecked-create-nested-many-without-job-categories.input';

@InputType()
export class JobCategoryUncheckedCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    categoryId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Name must be a string' })
    @Validator.Length(2, 50, { message: 'Name must be between 2 and 50 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    name!: string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    parentId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 500, { message: 'Description cannot exceed 500 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Is popular must be a boolean' })
    @Validator.IsOptional()
    isPopular?: boolean;

    @Field(() => JobCategoryUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    @ValidateNested()
    @Type(() => JobCategoryUncheckedCreateNestedManyWithoutParentInput)
    children?: JobCategoryUncheckedCreateNestedManyWithoutParentInput;

    @Field(() => JobUncheckedCreateNestedManyWithoutJobCategoryInput, {nullable:true})
    @Type(() => JobUncheckedCreateNestedManyWithoutJobCategoryInput)
    @ValidateNested()
    @Type(() => JobUncheckedCreateNestedManyWithoutJobCategoryInput)
    jobs?: JobUncheckedCreateNestedManyWithoutJobCategoryInput;

    @Field(() => WorkshopUncheckedCreateNestedManyWithoutJobCategoriesInput, {nullable:true})
    @Type(() => WorkshopUncheckedCreateNestedManyWithoutJobCategoriesInput)
    @ValidateNested()
    @Type(() => WorkshopUncheckedCreateNestedManyWithoutJobCategoriesInput)
    workshops?: WorkshopUncheckedCreateNestedManyWithoutJobCategoriesInput;
}
