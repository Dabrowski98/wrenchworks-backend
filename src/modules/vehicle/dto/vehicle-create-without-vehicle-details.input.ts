import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestCreateNestedManyWithoutVehicleInput } from '../../service-request/dto/service-request-create-nested-many-without-vehicle.input';
import { ServiceCreateNestedManyWithoutVehicleInput } from '../../service/dto/service-create-nested-many-without-vehicle.input';
import { VehicleModelCreateNestedOneWithoutVehiclesInput } from '../../vehicle-model/dto/vehicle-model-create-nested-one-without-vehicles.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutVehiclesInput } from '../../user/dto/user-create-nested-one-without-vehicles.input';
import { CustomerCreateNestedOneWithoutVehiclesInput } from '../../customer/dto/customer-create-nested-one-without-vehicles.input';
import { GuestCreateNestedOneWithoutVehicleInput } from '../../guest/dto/guest-create-nested-one-without-vehicle.input';

@InputType()
export class VehicleCreateWithoutVehicleDetailsInput {

    @HideField()
    vehicleId?: bigint | number;

    @HideField()
    deletedAt?: Date | string;

    @HideField()
    serviceRequests?: ServiceRequestCreateNestedManyWithoutVehicleInput;

    @HideField()
    services?: ServiceCreateNestedManyWithoutVehicleInput;

    @Field(() => VehicleModelCreateNestedOneWithoutVehiclesInput, {nullable:false})
    @ValidateNested()
    @Type(() => VehicleModelCreateNestedOneWithoutVehiclesInput)
    vehicleModel!: VehicleModelCreateNestedOneWithoutVehiclesInput;

    @Field(() => UserCreateNestedOneWithoutVehiclesInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutVehiclesInput)
    @ValidateNested()
    user?: UserCreateNestedOneWithoutVehiclesInput;

    @Field(() => CustomerCreateNestedOneWithoutVehiclesInput, {nullable:true})
    @Type(() => CustomerCreateNestedOneWithoutVehiclesInput)
    @ValidateNested()
    @Type(() => CustomerCreateNestedOneWithoutVehiclesInput)
    customer?: CustomerCreateNestedOneWithoutVehiclesInput;

    @HideField()
    guest?: GuestCreateNestedOneWithoutVehicleInput;
}
