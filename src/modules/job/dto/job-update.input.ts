import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { JobCategoryUpdateOneRequiredWithoutJobsNestedInput } from '../../job-category/dto/job-category-update-one-required-without-jobs-nested.input';
import { ServiceRequestUpdateManyWithoutJobsNestedInput } from '../../service-request/dto/service-request-update-many-without-jobs-nested.input';
import { Type } from 'class-transformer';
import { WorkshopJobUpdateManyWithoutJobNestedInput } from '../../workshop-job/dto/workshop-job-update-many-without-job-nested.input';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class JobUpdateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Name must be a string' })
    @Validator.Length(2, 50, { message: 'Name must be between 2 and 50 characters' })
    @Validator.IsOptional()
    name?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 500, { message: 'Description cannot exceed 500 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsBoolean({ message: 'Is popular must be a boolean' })
    isPopular?: boolean;
    
    @Field(() => GraphQLBigInt, {nullable:true})
    @Validator.IsOptional()
    categoryId?: bigint | number;
}
