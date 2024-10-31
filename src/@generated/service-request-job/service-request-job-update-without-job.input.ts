import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ServiceRequestUpdateOneRequiredWithoutServiceRequestJobsNestedInput } from '../service-request/service-request-update-one-required-without-service-request-jobs-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceRequestJobUpdateWithoutJobInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ServiceRequestUpdateOneRequiredWithoutServiceRequestJobsNestedInput, {nullable:true})
    @Type(() => ServiceRequestUpdateOneRequiredWithoutServiceRequestJobsNestedInput)
    serviceRequest?: ServiceRequestUpdateOneRequiredWithoutServiceRequestJobsNestedInput;
}
