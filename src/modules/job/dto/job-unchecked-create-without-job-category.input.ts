import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ServiceRequestUncheckedCreateNestedManyWithoutJobsInput } from '../../service-request/dto/service-request-unchecked-create-nested-many-without-jobs.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopJobUncheckedCreateNestedManyWithoutJobInput } from '../../workshop-job/dto/workshop-job-unchecked-create-nested-many-without-job.input';

@InputType()
export class JobUncheckedCreateWithoutJobCategoryInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
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
    @Validator.IsOptional()
    isPopular?: boolean;

    @Field(() => ServiceRequestUncheckedCreateNestedManyWithoutJobsInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutJobsInput)
    @ValidateNested()
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutJobsInput)
    serviceRequests?: ServiceRequestUncheckedCreateNestedManyWithoutJobsInput;

    @Field(() => WorkshopJobUncheckedCreateNestedManyWithoutJobInput, {nullable:true})
    @Type(() => WorkshopJobUncheckedCreateNestedManyWithoutJobInput)
    @ValidateNested()
    @Type(() => WorkshopJobUncheckedCreateNestedManyWithoutJobInput)
    jobWorkshops?: WorkshopJobUncheckedCreateNestedManyWithoutJobInput;
}
