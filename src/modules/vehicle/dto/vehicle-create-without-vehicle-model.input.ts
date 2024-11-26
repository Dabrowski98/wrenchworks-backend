import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestCreateNestedManyWithoutVehicleInput } from '../../service-request/dto/service-request-create-nested-many-without-vehicle.input';
import { ServiceCreateNestedManyWithoutVehicleInput } from '../../service/dto/service-create-nested-many-without-vehicle.input';
import { UserCreateNestedOneWithoutVehiclesInput } from '../../user/dto/user-create-nested-one-without-vehicles.input';
import { Type } from 'class-transformer';
import { CustomerCreateNestedManyWithoutVehiclesInput } from '../../customer/dto/customer-create-nested-many-without-vehicles.input';
import { ValidateNested } from 'class-validator';
import { GuestCreateNestedOneWithoutVehicleInput } from '../../guest/dto/guest-create-nested-one-without-vehicle.input';
import { VehicleDetailsCreateNestedOneWithoutVehicleInput } from '../../vehicle-details/dto/vehicle-details-create-nested-one-without-vehicle.input';

@InputType()
export class VehicleCreateWithoutVehicleModelInput {

    @HideField()
    vehicleId?: bigint | number;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    serviceRequests?: ServiceRequestCreateNestedManyWithoutVehicleInput;

    @HideField()
    services?: ServiceCreateNestedManyWithoutVehicleInput;

    @Field(() => UserCreateNestedOneWithoutVehiclesInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutVehiclesInput)
    user?: UserCreateNestedOneWithoutVehiclesInput;

    @Field(() => CustomerCreateNestedManyWithoutVehiclesInput, {nullable:true})
    @Type(() => CustomerCreateNestedManyWithoutVehiclesInput)
    @ValidateNested()
    @Type(() => CustomerCreateNestedManyWithoutVehiclesInput)
    customers?: CustomerCreateNestedManyWithoutVehiclesInput;

    @HideField()
    guest?: GuestCreateNestedOneWithoutVehicleInput;

    @Field(() => VehicleDetailsCreateNestedOneWithoutVehicleInput, {nullable:true})
    vehicleDetails?: VehicleDetailsCreateNestedOneWithoutVehicleInput;
}
