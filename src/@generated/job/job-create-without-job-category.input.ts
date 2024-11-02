import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestCreateNestedManyWithoutJobsInput } from '../service-request/service-request-create-nested-many-without-jobs.input';
import { Type } from 'class-transformer';
import { WorkshopJobCreateNestedManyWithoutJobInput } from '../workshop-job/workshop-job-create-nested-many-without-job.input';

@InputType()
export class JobCreateWithoutJobCategoryInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    jobId?: bigint | number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isPopular?: boolean;

    @Field(() => ServiceRequestCreateNestedManyWithoutJobsInput, {nullable:true})
    @Type(() => ServiceRequestCreateNestedManyWithoutJobsInput)
    serviceRequests?: ServiceRequestCreateNestedManyWithoutJobsInput;

    @Field(() => WorkshopJobCreateNestedManyWithoutJobInput, {nullable:true})
    @Type(() => WorkshopJobCreateNestedManyWithoutJobInput)
    jobWorkshops?: WorkshopJobCreateNestedManyWithoutJobInput;
}
