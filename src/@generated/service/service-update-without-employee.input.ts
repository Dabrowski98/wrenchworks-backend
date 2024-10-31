import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumServicesStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-services-status-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ServiceRequestUpdateOneWithoutApprovedServiceNestedInput } from '../service-request/service-request-update-one-without-approved-service-nested.input';
import { TaskUpdateManyWithoutServiceNestedInput } from '../task/task-update-many-without-service-nested.input';
import { CustomerUpdateOneRequiredWithoutServicesNestedInput } from '../customer/customer-update-one-required-without-services-nested.input';
import { VehicleUpdateOneRequiredWithoutServicesNestedInput } from '../vehicle/vehicle-update-one-required-without-services-nested.input';
import { WorkshopUpdateOneRequiredWithoutServicesNestedInput } from '../workshop/workshop-update-one-required-without-services-nested.input';

@InputType()
export class ServiceUpdateWithoutEmployeeInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    serviceId?: BigIntFieldUpdateOperationsInput;

    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    serviceRequestId?: NullableBigIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumServicesStatusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumServicesStatusFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    payedOff?: BoolFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    paymentAmount?: DecimalFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    serviceStartDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    serviceEndDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ServiceRequestUpdateOneWithoutApprovedServiceNestedInput, {nullable:true})
    @Type(() => ServiceRequestUpdateOneWithoutApprovedServiceNestedInput)
    serviceRequest?: ServiceRequestUpdateOneWithoutApprovedServiceNestedInput;

    @Field(() => TaskUpdateManyWithoutServiceNestedInput, {nullable:true})
    @Type(() => TaskUpdateManyWithoutServiceNestedInput)
    tasks?: TaskUpdateManyWithoutServiceNestedInput;

    @Field(() => CustomerUpdateOneRequiredWithoutServicesNestedInput, {nullable:true})
    @Type(() => CustomerUpdateOneRequiredWithoutServicesNestedInput)
    customer?: CustomerUpdateOneRequiredWithoutServicesNestedInput;

    @Field(() => VehicleUpdateOneRequiredWithoutServicesNestedInput, {nullable:true})
    @Type(() => VehicleUpdateOneRequiredWithoutServicesNestedInput)
    vehicle?: VehicleUpdateOneRequiredWithoutServicesNestedInput;

    @Field(() => WorkshopUpdateOneRequiredWithoutServicesNestedInput, {nullable:true})
    @Type(() => WorkshopUpdateOneRequiredWithoutServicesNestedInput)
    workshop?: WorkshopUpdateOneRequiredWithoutServicesNestedInput;
}
