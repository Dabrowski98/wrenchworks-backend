import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceUpdateManyWithoutVehicleNestedInput } from '../../service/dto/service-update-many-without-vehicle-nested.input';
import { VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput } from '../../vehicle-model/dto/vehicle-model-update-one-required-without-vehicles-nested.input';
import { UserUpdateOneWithoutVehiclesNestedInput } from '../../user/dto/user-update-one-without-vehicles-nested.input';
import { CustomerUpdateManyWithoutVehiclesNestedInput } from '../../customer/dto/customer-update-many-without-vehicles-nested.input';
import { GuestUpdateOneWithoutVehicleNestedInput } from '../../guest/dto/guest-update-one-without-vehicle-nested.input';
import { VehicleDetailsUpdateOneWithoutVehicleNestedInput } from '../../vehicle-details/dto/vehicle-details-update-one-without-vehicle-nested.input';

@InputType()
export class VehicleUpdateWithoutServiceRequestsInput {

    @HideField()
    vehicleId?: bigint | number;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    services?: ServiceUpdateManyWithoutVehicleNestedInput;

    @HideField()
    vehicleModel?: VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput;

    @HideField()
    user?: UserUpdateOneWithoutVehiclesNestedInput;

    @HideField()
    customers?: CustomerUpdateManyWithoutVehiclesNestedInput;

    @HideField()
    guest?: GuestUpdateOneWithoutVehicleNestedInput;

    @Field(() => VehicleDetailsUpdateOneWithoutVehicleNestedInput, {nullable:true})
    vehicleDetails?: VehicleDetailsUpdateOneWithoutVehicleNestedInput;
}