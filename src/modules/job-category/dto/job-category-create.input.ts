import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { JobCategoryCreateNestedOneWithoutChildrenInput } from './job-category-create-nested-one-without-children.input';
import { JobCategoryCreateNestedManyWithoutChildInput } from './job-category-create-nested-many-without-child.input';
import { JobCreateNestedManyWithoutJobCategoryInput } from '../../job/dto/job-create-nested-many-without-job-category.input';
import { Type } from 'class-transformer';
import { WorkshopCreateNestedManyWithoutJobCategoriesInput } from '../../workshop/dto/workshop-create-nested-many-without-job-categories.input';
import { JobCategoryCreateManyChildInputEnvelope } from './job-category-create-many-child-input-envelope.input';
import { GraphQLBigInt } from 'graphql-scalars';


@InputType()
export class JobCategoryCreateInput {

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

    @Field(() => GraphQLBigInt, { nullable: true })
    parentJobCategoryId?: bigint;

    @Field(() => JobCategoryCreateManyChildInputEnvelope, {nullable:true})
    @Type(() => JobCategoryCreateManyChildInputEnvelope)
    children?: JobCategoryCreateManyChildInputEnvelope;
}
