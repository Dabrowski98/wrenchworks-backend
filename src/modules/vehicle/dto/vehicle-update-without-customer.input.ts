import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestUpdateManyWithoutVehicleNestedInput } from '../../service-request/dto/service-request-update-many-without-vehicle-nested.input';
import { ServiceUpdateManyWithoutVehicleNestedInput } from '../../service/dto/service-update-many-without-vehicle-nested.input';
import { VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput } from '../../vehicle-model/dto/vehicle-model-update-one-required-without-vehicles-nested.input';
import { UserUpdateOneWithoutVehiclesNestedInput } from '../../user/dto/user-update-one-without-vehicles-nested.input';
import { GuestUpdateOneWithoutVehicleNestedInput } from '../../guest/dto/guest-update-one-without-vehicle-nested.input';
import { VehicleDetailsUpdateOneWithoutVehicleNestedInput } from '../../vehicle-details/dto/vehicle-details-update-one-without-vehicle-nested.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleUpdateWithoutCustomerInput {

    @Field(() => VehicleDetailsUpdateOneWithoutVehicleNestedInput, {nullable:true})
    @ValidateNested()
    vehicleDetails?: VehicleDetailsUpdateOneWithoutVehicleNestedInput;
}