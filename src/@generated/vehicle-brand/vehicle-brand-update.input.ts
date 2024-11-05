import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { VehicleModelUpdateManyWithoutVehiclesBrandNestedInput } from '../vehicle-model/vehicle-model-update-many-without-vehicles-brand-nested.input';

@InputType()
export class VehicleBrandUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => VehicleModelUpdateManyWithoutVehiclesBrandNestedInput, {nullable:true})
    vehicleModels?: VehicleModelUpdateManyWithoutVehiclesBrandNestedInput;
}
