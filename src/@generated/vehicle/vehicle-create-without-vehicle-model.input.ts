import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestCreateNestedManyWithoutVehicleInput } from '../service-request/service-request-create-nested-many-without-vehicle.input';
import { Type } from 'class-transformer';
import { ServiceCreateNestedManyWithoutVehicleInput } from '../service/service-create-nested-many-without-vehicle.input';
import { VehicleBrandCreateNestedOneWithoutVehiclesInput } from '../vehicle-brand/vehicle-brand-create-nested-one-without-vehicles.input';
import { PersonCreateNestedOneWithoutVehiclesInput } from '../person/person-create-nested-one-without-vehicles.input';
import { VehicleDetailsCreateNestedOneWithoutVehicleInput } from '../vehicle-details/vehicle-details-create-nested-one-without-vehicle.input';

@InputType()
export class VehicleCreateWithoutVehicleModelInput {

    @HideField()
    vehicleId?: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceRequestCreateNestedManyWithoutVehicleInput, {nullable:true})
    @Type(() => ServiceRequestCreateNestedManyWithoutVehicleInput)
    vehicleAssociatedServiceRequests?: ServiceRequestCreateNestedManyWithoutVehicleInput;

    @Field(() => ServiceCreateNestedManyWithoutVehicleInput, {nullable:true})
    @Type(() => ServiceCreateNestedManyWithoutVehicleInput)
    services?: ServiceCreateNestedManyWithoutVehicleInput;

    @Field(() => VehicleBrandCreateNestedOneWithoutVehiclesInput, {nullable:false})
    vehicleBrand!: VehicleBrandCreateNestedOneWithoutVehiclesInput;

    @Field(() => PersonCreateNestedOneWithoutVehiclesInput, {nullable:false})
    @Type(() => PersonCreateNestedOneWithoutVehiclesInput)
    person!: PersonCreateNestedOneWithoutVehiclesInput;

    @Field(() => VehicleDetailsCreateNestedOneWithoutVehicleInput, {nullable:true})
    vehiclesDetails?: VehicleDetailsCreateNestedOneWithoutVehicleInput;
}
