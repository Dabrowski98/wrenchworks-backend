import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { JobCategoryUncheckedUpdateManyWithoutParentNestedInput } from './job-category-unchecked-update-many-without-parent-nested.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { JobUncheckedUpdateManyWithoutJobCategoryNestedInput } from '../../job/dto/job-unchecked-update-many-without-job-category-nested.input';
import { WorkshopUncheckedUpdateManyWithoutJobCategoriesNestedInput } from '../../workshop/dto/workshop-unchecked-update-many-without-job-categories-nested.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';


@InputType()
export class JobCategoryUncheckedUpdateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    categoryId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Name must be a string' })
    @Validator.Length(2, 50, { message: 'Name must be between 2 and 50 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    name?: string;

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

    @Field(() => JobCategoryUncheckedUpdateManyWithoutParentNestedInput, {nullable:true})
    @ValidateNested()
    @Type(() => JobCategoryUncheckedUpdateManyWithoutParentNestedInput)
    children?: JobCategoryUncheckedUpdateManyWithoutParentNestedInput;

    @Field(() => JobUncheckedUpdateManyWithoutJobCategoryNestedInput, {nullable:true})
    @Type(() => JobUncheckedUpdateManyWithoutJobCategoryNestedInput)
    @ValidateNested()
    @Type(() => JobUncheckedUpdateManyWithoutJobCategoryNestedInput)
    jobs?: JobUncheckedUpdateManyWithoutJobCategoryNestedInput;

    @Field(() => WorkshopUncheckedUpdateManyWithoutJobCategoriesNestedInput, {nullable:true})
    @Type(() => WorkshopUncheckedUpdateManyWithoutJobCategoriesNestedInput)
    @ValidateNested()
    @Type(() => WorkshopUncheckedUpdateManyWithoutJobCategoriesNestedInput)
    workshops?: WorkshopUncheckedUpdateManyWithoutJobCategoriesNestedInput;
}
