import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableEnumServiceRequestsStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-service-requests-status-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ServiceRequestJobUncheckedUpdateManyWithoutServiceRequestNestedInput } from '../service-request-job/service-request-job-unchecked-update-many-without-service-request-nested.input';

@InputType()
export class ServiceRequestUncheckedUpdateWithoutApprovedServiceInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    serviceRequestId?: BigIntFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    workshopId?: BigIntFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    vehicleId?: BigIntFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    personId?: BigIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    requestedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableEnumServiceRequestsStatusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumServiceRequestsStatusFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ServiceRequestJobUncheckedUpdateManyWithoutServiceRequestNestedInput, {nullable:true})
    serviceRequestJobs?: ServiceRequestJobUncheckedUpdateManyWithoutServiceRequestNestedInput;
}
