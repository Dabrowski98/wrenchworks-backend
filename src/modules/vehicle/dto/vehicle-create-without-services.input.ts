import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestCreateNestedManyWithoutVehicleInput } from '../../service-request/dto/service-request-create-nested-many-without-vehicle.input';
import { VehicleModelCreateNestedOneWithoutVehiclesInput } from '../../vehicle-model/dto/vehicle-model-create-nested-one-without-vehicles.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutVehiclesInput } from '../../user/dto/user-create-nested-one-without-vehicles.input';
import { CustomerCreateNestedManyWithoutVehiclesInput } from '../../customer/dto/customer-create-nested-many-without-vehicles.input';
import { GuestCreateNestedOneWithoutVehicleInput } from '../../guest/dto/guest-create-nested-one-without-vehicle.input';
import { VehicleDetailsCreateNestedOneWithoutVehicleInput } from '../../vehicle-details/dto/vehicle-details-create-nested-one-without-vehicle.input';

@InputType()
export class VehicleCreateWithoutServicesInput {

    @Field(() => VehicleModelCreateNestedOneWithoutVehiclesInput, {nullable:false})
    @ValidateNested()
    @Type(() => VehicleModelCreateNestedOneWithoutVehiclesInput)
    vehicleModel!: VehicleModelCreateNestedOneWithoutVehiclesInput;

    @Field(() => UserCreateNestedOneWithoutVehiclesInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutVehiclesInput)
    @ValidateNested()
    user?: UserCreateNestedOneWithoutVehiclesInput;

    @Field(() => CustomerCreateNestedManyWithoutVehiclesInput, {nullable:true})
    @Type(() => CustomerCreateNestedManyWithoutVehiclesInput)
    @ValidateNested()
    @Type(() => CustomerCreateNestedManyWithoutVehiclesInput)
    customers?: CustomerCreateNestedManyWithoutVehiclesInput;

    @Field(() => VehicleDetailsCreateNestedOneWithoutVehicleInput, {nullable:true})
    @ValidateNested()
    vehicleDetails?: VehicleDetailsCreateNestedOneWithoutVehicleInput;
}