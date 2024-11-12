import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ServiceRequestCreateNestedManyWithoutJobsInput } from '../../service-request/dto/service-request-create-nested-many-without-jobs.input';
import { Type } from 'class-transformer';
import { WorkshopJobCreateNestedManyWithoutJobInput } from '../../workshop-job/dto/workshop-job-create-nested-many-without-job.input';

@InputType()
export class JobCreateWithoutJobCategoryInput {

    @HideField()
    jobId?: bigint | number;

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

    @Field(() => ServiceRequestCreateNestedManyWithoutJobsInput, {nullable:true})
    @Type(() => ServiceRequestCreateNestedManyWithoutJobsInput)
    serviceRequests?: ServiceRequestCreateNestedManyWithoutJobsInput;

    @Field(() => WorkshopJobCreateNestedManyWithoutJobInput, {nullable:true})
    @Type(() => WorkshopJobCreateNestedManyWithoutJobInput)
    jobWorkshops?: WorkshopJobCreateNestedManyWithoutJobInput;
}
