import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateNestedOneWithoutJobServiceRequestsInput } from '../job/job-create-nested-one-without-job-service-requests.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceRequestJobCreateWithoutServiceRequestInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => JobCreateNestedOneWithoutJobServiceRequestsInput, {nullable:false})
    @Type(() => JobCreateNestedOneWithoutJobServiceRequestsInput)
    job!: JobCreateNestedOneWithoutJobServiceRequestsInput;
}
