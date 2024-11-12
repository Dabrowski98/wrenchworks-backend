import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ServiceRequestUncheckedUpdateManyWithoutJobsNestedInput } from '../../service-request/dto/service-request-unchecked-update-many-without-jobs-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class JobUncheckedUpdateWithoutJobWorkshopsInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    jobId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    categoryId?: bigint | number;

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
    @Validator.IsBoolean({ message: 'Is popular must be a boolean' })
    isPopular?: boolean;

    @Field(() => ServiceRequestUncheckedUpdateManyWithoutJobsNestedInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutJobsNestedInput)
    serviceRequests?: ServiceRequestUncheckedUpdateManyWithoutJobsNestedInput;
}
