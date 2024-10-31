import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput } from '../vehicle/vehicle-unchecked-update-many-without-vehicle-model-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleModelUncheckedUpdateWithoutVehiclesBrandInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    modelId?: BigIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    modelName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput, {nullable:true})
    @Type(() => VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput)
    vehicles?: VehicleUncheckedUpdateManyWithoutVehicleModelNestedInput;
}
