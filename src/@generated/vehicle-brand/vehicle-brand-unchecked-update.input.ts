import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { VehicleUncheckedUpdateManyWithoutVehicleBrandNestedInput } from '../vehicle/vehicle-unchecked-update-many-without-vehicle-brand-nested.input';
import { Type } from 'class-transformer';
import { VehicleModelUncheckedUpdateManyWithoutVehiclesBrandNestedInput } from '../vehicle-model/vehicle-model-unchecked-update-many-without-vehicles-brand-nested.input';

@InputType()
export class VehicleBrandUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => VehicleUncheckedUpdateManyWithoutVehicleBrandNestedInput, {nullable:true})
    @Type(() => VehicleUncheckedUpdateManyWithoutVehicleBrandNestedInput)
    vehicles?: VehicleUncheckedUpdateManyWithoutVehicleBrandNestedInput;

    @Field(() => VehicleModelUncheckedUpdateManyWithoutVehiclesBrandNestedInput, {nullable:true})
    vehicleModels?: VehicleModelUncheckedUpdateManyWithoutVehiclesBrandNestedInput;
}
