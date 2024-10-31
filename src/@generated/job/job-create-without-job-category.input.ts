import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestJobCreateNestedManyWithoutJobInput } from '../service-request-job/service-request-job-create-nested-many-without-job.input';
import { WorkshopJobCreateNestedManyWithoutJobInput } from '../workshop-job/workshop-job-create-nested-many-without-job.input';
import { Type } from 'class-transformer';

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

    @Field(() => ServiceRequestJobCreateNestedManyWithoutJobInput, {nullable:true})
    jobServiceRequests?: ServiceRequestJobCreateNestedManyWithoutJobInput;

    @Field(() => WorkshopJobCreateNestedManyWithoutJobInput, {nullable:true})
    @Type(() => WorkshopJobCreateNestedManyWithoutJobInput)
    jobWorkshops?: WorkshopJobCreateNestedManyWithoutJobInput;
}
