import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableEnumServiceRequestsStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-service-requests-status-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ServiceRequestJobUpdateManyWithoutServiceRequestNestedInput } from '../service-request-job/service-request-job-update-many-without-service-request-nested.input';
import { ServiceUpdateOneWithoutServiceRequestNestedInput } from '../service/service-update-one-without-service-request-nested.input';
import { Type } from 'class-transformer';
import { VehicleUpdateOneRequiredWithoutVehicleAssociatedServiceRequestsNestedInput } from '../vehicle/vehicle-update-one-required-without-vehicle-associated-service-requests-nested.input';
import { WorkshopUpdateOneRequiredWithoutServiceRequestsNestedInput } from '../workshop/workshop-update-one-required-without-service-requests-nested.input';

@InputType()
export class ServiceRequestUpdateWithoutPersonInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    serviceRequestId?: BigIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    requestedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableEnumServiceRequestsStatusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumServiceRequestsStatusFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ServiceRequestJobUpdateManyWithoutServiceRequestNestedInput, {nullable:true})
    serviceRequestJobs?: ServiceRequestJobUpdateManyWithoutServiceRequestNestedInput;

    @Field(() => ServiceUpdateOneWithoutServiceRequestNestedInput, {nullable:true})
    @Type(() => ServiceUpdateOneWithoutServiceRequestNestedInput)
    approvedService?: ServiceUpdateOneWithoutServiceRequestNestedInput;

    @Field(() => VehicleUpdateOneRequiredWithoutVehicleAssociatedServiceRequestsNestedInput, {nullable:true})
    @Type(() => VehicleUpdateOneRequiredWithoutVehicleAssociatedServiceRequestsNestedInput)
    vehicle?: VehicleUpdateOneRequiredWithoutVehicleAssociatedServiceRequestsNestedInput;

    @Field(() => WorkshopUpdateOneRequiredWithoutServiceRequestsNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneRequiredWithoutServiceRequestsNestedInput)
    workshop?: WorkshopUpdateOneRequiredWithoutServiceRequestsNestedInput;
}
