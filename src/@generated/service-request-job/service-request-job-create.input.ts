import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateNestedOneWithoutJobServiceRequestsInput } from '../job/job-create-nested-one-without-job-service-requests.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateNestedOneWithoutServiceRequestJobsInput } from '../service-request/service-request-create-nested-one-without-service-request-jobs.input';

@InputType()
export class ServiceRequestJobCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => JobCreateNestedOneWithoutJobServiceRequestsInput, {nullable:false})
    @Type(() => JobCreateNestedOneWithoutJobServiceRequestsInput)
    job!: JobCreateNestedOneWithoutJobServiceRequestsInput;

    @Field(() => ServiceRequestCreateNestedOneWithoutServiceRequestJobsInput, {nullable:false})
    @Type(() => ServiceRequestCreateNestedOneWithoutServiceRequestJobsInput)
    serviceRequest!: ServiceRequestCreateNestedOneWithoutServiceRequestJobsInput;
}
