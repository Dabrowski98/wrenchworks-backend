import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { JobUpdateOneRequiredWithoutJobServiceRequestsNestedInput } from '../job/job-update-one-required-without-job-service-requests-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceRequestJobUpdateWithoutServiceRequestInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => JobUpdateOneRequiredWithoutJobServiceRequestsNestedInput, {nullable:true})
    @Type(() => JobUpdateOneRequiredWithoutJobServiceRequestsNestedInput)
    job?: JobUpdateOneRequiredWithoutJobServiceRequestsNestedInput;
}
