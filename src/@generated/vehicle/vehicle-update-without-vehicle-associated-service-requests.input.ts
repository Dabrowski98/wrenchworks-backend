import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ServiceUpdateManyWithoutVehicleNestedInput } from '../service/service-update-many-without-vehicle-nested.input';
import { Type } from 'class-transformer';
import { VehicleBrandUpdateOneRequiredWithoutVehiclesNestedInput } from '../vehicle-brand/vehicle-brand-update-one-required-without-vehicles-nested.input';
import { VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput } from '../vehicle-model/vehicle-model-update-one-required-without-vehicles-nested.input';
import { PersonUpdateOneRequiredWithoutVehiclesNestedInput } from '../person/person-update-one-required-without-vehicles-nested.input';
import { VehicleDetailsUpdateOneWithoutVehicleNestedInput } from '../vehicle-details/vehicle-details-update-one-without-vehicle-nested.input';

@InputType()
export class VehicleUpdateWithoutVehicleAssociatedServiceRequestsInput {

    @HideField()
    vehicleId?: BigIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ServiceUpdateManyWithoutVehicleNestedInput, {nullable:true})
    @Type(() => ServiceUpdateManyWithoutVehicleNestedInput)
    services?: ServiceUpdateManyWithoutVehicleNestedInput;

    @Field(() => VehicleBrandUpdateOneRequiredWithoutVehiclesNestedInput, {nullable:true})
    vehicleBrand?: VehicleBrandUpdateOneRequiredWithoutVehiclesNestedInput;

    @Field(() => VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput, {nullable:true})
    vehicleModel?: VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput;

    @Field(() => PersonUpdateOneRequiredWithoutVehiclesNestedInput, {nullable:true})
    @Type(() => PersonUpdateOneRequiredWithoutVehiclesNestedInput)
    person?: PersonUpdateOneRequiredWithoutVehiclesNestedInput;

    @Field(() => VehicleDetailsUpdateOneWithoutVehicleNestedInput, {nullable:true})
    vehiclesDetails?: VehicleDetailsUpdateOneWithoutVehicleNestedInput;
}
