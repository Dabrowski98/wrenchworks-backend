import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ServiceRequestUpdateManyWithoutVehicleNestedInput } from '../service-request/service-request-update-many-without-vehicle-nested.input';
import { Type } from 'class-transformer';
import { ServiceUpdateManyWithoutVehicleNestedInput } from '../service/service-update-many-without-vehicle-nested.input';
import { VehicleBrandUpdateOneRequiredWithoutVehiclesNestedInput } from '../vehicle-brand/vehicle-brand-update-one-required-without-vehicles-nested.input';
import { PersonUpdateOneRequiredWithoutVehiclesNestedInput } from '../person/person-update-one-required-without-vehicles-nested.input';
import { VehicleDetailsUpdateOneWithoutVehicleNestedInput } from '../vehicle-details/vehicle-details-update-one-without-vehicle-nested.input';

@InputType()
export class VehicleUpdateWithoutVehicleModelInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    vehicleId?: BigIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ServiceRequestUpdateManyWithoutVehicleNestedInput, {nullable:true})
    @Type(() => ServiceRequestUpdateManyWithoutVehicleNestedInput)
    vehicleAssociatedServiceRequests?: ServiceRequestUpdateManyWithoutVehicleNestedInput;

    @Field(() => ServiceUpdateManyWithoutVehicleNestedInput, {nullable:true})
    @Type(() => ServiceUpdateManyWithoutVehicleNestedInput)
    services?: ServiceUpdateManyWithoutVehicleNestedInput;

    @Field(() => VehicleBrandUpdateOneRequiredWithoutVehiclesNestedInput, {nullable:true})
    vehicleBrand?: VehicleBrandUpdateOneRequiredWithoutVehiclesNestedInput;

    @Field(() => PersonUpdateOneRequiredWithoutVehiclesNestedInput, {nullable:true})
    @Type(() => PersonUpdateOneRequiredWithoutVehiclesNestedInput)
    person?: PersonUpdateOneRequiredWithoutVehiclesNestedInput;

    @Field(() => VehicleDetailsUpdateOneWithoutVehicleNestedInput, {nullable:true})
    vehiclesDetails?: VehicleDetailsUpdateOneWithoutVehicleNestedInput;
}
