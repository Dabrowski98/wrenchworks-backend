import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { VehicleUpdateManyWithoutVehicleModelNestedInput } from '../vehicle/vehicle-update-many-without-vehicle-model-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleModelUpdateWithoutVehiclesBrandInput {

    @HideField()
    modelId?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    modelName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => VehicleUpdateManyWithoutVehicleModelNestedInput, {nullable:true})
    @Type(() => VehicleUpdateManyWithoutVehicleModelNestedInput)
    vehicles?: VehicleUpdateManyWithoutVehicleModelNestedInput;
}
