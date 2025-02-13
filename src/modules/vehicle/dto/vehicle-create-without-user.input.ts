import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestCreateNestedManyWithoutVehicleInput } from '../../service-request/dto/service-request-create-nested-many-without-vehicle.input';
import { ServiceCreateNestedManyWithoutVehicleInput } from '../../service/dto/service-create-nested-many-without-vehicle.input';
import { VehicleModelCreateNestedOneWithoutVehiclesInput } from '../../vehicle-model/dto/vehicle-model-create-nested-one-without-vehicles.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CustomerCreateNestedOneWithoutVehiclesInput } from '../../customer/dto/customer-create-nested-one-without-vehicles.input';
import { GuestCreateNestedOneWithoutVehicleInput } from '../../guest/dto/guest-create-nested-one-without-vehicle.input';
import { VehicleDetailsCreateNestedOneWithoutVehicleInput } from '../../vehicle-details/dto/vehicle-details-create-nested-one-without-vehicle.input';

@InputType()
export class VehicleCreateWithoutUserInput {

    @Field(() => VehicleModelCreateNestedOneWithoutVehiclesInput, {nullable:false})
    @ValidateNested()
    @Type(() => VehicleModelCreateNestedOneWithoutVehiclesInput)
    vehicleModel!: VehicleModelCreateNestedOneWithoutVehiclesInput;

    @Field(() => CustomerCreateNestedOneWithoutVehiclesInput, {nullable:true})
    @Type(() => CustomerCreateNestedOneWithoutVehiclesInput)
    @ValidateNested()
    @Type(() => CustomerCreateNestedOneWithoutVehiclesInput)
    customer?: CustomerCreateNestedOneWithoutVehiclesInput;

    @Field(() => VehicleDetailsCreateNestedOneWithoutVehicleInput, {nullable:true})
    @ValidateNested()
    vehicleDetails?: VehicleDetailsCreateNestedOneWithoutVehicleInput;
}