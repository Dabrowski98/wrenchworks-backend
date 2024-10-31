import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ServiceUncheckedUpdateManyWithoutVehicleNestedInput } from '../service/service-unchecked-update-many-without-vehicle-nested.input';
import { Type } from 'class-transformer';
import { VehicleDetailsUncheckedUpdateOneWithoutVehicleNestedInput } from '../vehicle-details/vehicle-details-unchecked-update-one-without-vehicle-nested.input';

@InputType()
export class VehicleUncheckedUpdateWithoutVehicleAssociatedServiceRequestsInput {

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

    @Field(() => ServiceUncheckedUpdateManyWithoutVehicleNestedInput, {nullable:true})
    @Type(() => ServiceUncheckedUpdateManyWithoutVehicleNestedInput)
    services?: ServiceUncheckedUpdateManyWithoutVehicleNestedInput;

    @Field(() => VehicleDetailsUncheckedUpdateOneWithoutVehicleNestedInput, {nullable:true})
    vehiclesDetails?: VehicleDetailsUncheckedUpdateOneWithoutVehicleNestedInput;
}
