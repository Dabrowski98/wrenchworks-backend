import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobCategoryCreateNestedOneWithoutJobsInput } from '../job-category/job-category-create-nested-one-without-jobs.input';
import { ServiceRequestJobCreateNestedManyWithoutJobInput } from '../service-request-job/service-request-job-create-nested-many-without-job.input';
import { WorkshopJobCreateNestedManyWithoutJobInput } from '../workshop-job/workshop-job-create-nested-many-without-job.input';
import { Type } from 'class-transformer';

@InputType()
export class JobCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    jobId?: bigint | number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isPopular?: boolean;

    @Field(() => JobCategoryCreateNestedOneWithoutJobsInput, {nullable:false})
    jobCategory!: JobCategoryCreateNestedOneWithoutJobsInput;

    @Field(() => ServiceRequestJobCreateNestedManyWithoutJobInput, {nullable:true})
    jobServiceRequests?: ServiceRequestJobCreateNestedManyWithoutJobInput;

    @Field(() => WorkshopJobCreateNestedManyWithoutJobInput, {nullable:true})
    @Type(() => WorkshopJobCreateNestedManyWithoutJobInput)
    jobWorkshops?: WorkshopJobCreateNestedManyWithoutJobInput;
}
