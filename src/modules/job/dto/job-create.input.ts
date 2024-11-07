import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { JobCategoryCreateNestedOneWithoutJobsInput } from '../job-category/job-category-create-nested-one-without-jobs.input';
import { ServiceRequestCreateNestedManyWithoutJobsInput } from '../service-request/service-request-create-nested-many-without-jobs.input';
import { Type } from 'class-transformer';
import { WorkshopJobCreateNestedManyWithoutJobInput } from '../workshop-job/workshop-job-create-nested-many-without-job.input';

@InputType()
export class JobCreateInput {

    @HideField()
    jobId?: bigint | number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isPopular?: boolean;

    @Field(() => JobCategoryCreateNestedOneWithoutJobsInput, {nullable:false})
    jobCategory!: JobCategoryCreateNestedOneWithoutJobsInput;

    @Field(() => ServiceRequestCreateNestedManyWithoutJobsInput, {nullable:true})
    @Type(() => ServiceRequestCreateNestedManyWithoutJobsInput)
    serviceRequests?: ServiceRequestCreateNestedManyWithoutJobsInput;

    @Field(() => WorkshopJobCreateNestedManyWithoutJobInput, {nullable:true})
    @Type(() => WorkshopJobCreateNestedManyWithoutJobInput)
    jobWorkshops?: WorkshopJobCreateNestedManyWithoutJobInput;
}
