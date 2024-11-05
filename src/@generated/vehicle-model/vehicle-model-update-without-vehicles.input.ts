import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { VehicleBrandUpdateOneRequiredWithoutVehicleModelsNestedInput } from '../vehicle-brand/vehicle-brand-update-one-required-without-vehicle-models-nested.input';

@InputType()
export class VehicleModelUpdateWithoutVehiclesInput {

    @HideField()
    modelId?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    modelName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => VehicleBrandUpdateOneRequiredWithoutVehicleModelsNestedInput, {nullable:true})
    vehiclesBrand?: VehicleBrandUpdateOneRequiredWithoutVehicleModelsNestedInput;
}
