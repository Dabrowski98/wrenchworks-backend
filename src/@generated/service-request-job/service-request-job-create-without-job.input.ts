import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestCreateNestedOneWithoutServiceRequestJobsInput } from '../service-request/service-request-create-nested-one-without-service-request-jobs.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceRequestJobCreateWithoutJobInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ServiceRequestCreateNestedOneWithoutServiceRequestJobsInput, {nullable:false})
    @Type(() => ServiceRequestCreateNestedOneWithoutServiceRequestJobsInput)
    serviceRequest!: ServiceRequestCreateNestedOneWithoutServiceRequestJobsInput;
}
