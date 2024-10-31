import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { JobUpdateOneRequiredWithoutJobServiceRequestsNestedInput } from '../job/job-update-one-required-without-job-service-requests-nested.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateOneRequiredWithoutServiceRequestJobsNestedInput } from '../service-request/service-request-update-one-required-without-service-request-jobs-nested.input';

@InputType()
export class ServiceRequestJobUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => JobUpdateOneRequiredWithoutJobServiceRequestsNestedInput, {nullable:true})
    @Type(() => JobUpdateOneRequiredWithoutJobServiceRequestsNestedInput)
    job?: JobUpdateOneRequiredWithoutJobServiceRequestsNestedInput;

    @Field(() => ServiceRequestUpdateOneRequiredWithoutServiceRequestJobsNestedInput, {nullable:true})
    @Type(() => ServiceRequestUpdateOneRequiredWithoutServiceRequestJobsNestedInput)
    serviceRequest?: ServiceRequestUpdateOneRequiredWithoutServiceRequestJobsNestedInput;
}
