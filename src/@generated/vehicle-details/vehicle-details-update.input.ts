import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { VehicleUpdateOneRequiredWithoutVehiclesDetailsNestedInput } from '../vehicle/vehicle-update-one-required-without-vehicles-details-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleDetailsUpdateInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    yearOfProduction?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    VIN?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    engineCapacity?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    licensePlate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    fuelType?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    engineNo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bodyColor?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => VehicleUpdateOneRequiredWithoutVehiclesDetailsNestedInput, {nullable:true})
    @Type(() => VehicleUpdateOneRequiredWithoutVehiclesDetailsNestedInput)
    vehicle?: VehicleUpdateOneRequiredWithoutVehiclesDetailsNestedInput;
}
