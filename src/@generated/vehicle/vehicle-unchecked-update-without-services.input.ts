import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput } from '../service-request/service-request-unchecked-update-many-without-vehicle-nested.input';
import { Type } from 'class-transformer';
import { VehicleDetailsUncheckedUpdateOneWithoutVehicleNestedInput } from '../vehicle-details/vehicle-details-unchecked-update-one-without-vehicle-nested.input';

@InputType()
export class VehicleUncheckedUpdateWithoutServicesInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    vehicleId?: BigIntFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    personId?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandName?: StringFieldUpdateOperationsInput;

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    modelId?: BigIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput)
    vehicleAssociatedServiceRequests?: ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput;

    @Field(() => VehicleDetailsUncheckedUpdateOneWithoutVehicleNestedInput, {nullable:true})
    vehiclesDetails?: VehicleDetailsUncheckedUpdateOneWithoutVehicleNestedInput;
}
