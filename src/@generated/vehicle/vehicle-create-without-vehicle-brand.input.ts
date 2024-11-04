import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestCreateNestedManyWithoutVehicleInput } from '../service-request/service-request-create-nested-many-without-vehicle.input';
import { Type } from 'class-transformer';
import { ServiceCreateNestedManyWithoutVehicleInput } from '../service/service-create-nested-many-without-vehicle.input';
import { VehicleModelCreateNestedOneWithoutVehiclesInput } from '../vehicle-model/vehicle-model-create-nested-one-without-vehicles.input';
import { PersonCreateNestedOneWithoutVehiclesInput } from '../person/person-create-nested-one-without-vehicles.input';
import { VehicleDetailsCreateNestedOneWithoutVehicleInput } from '../vehicle-details/vehicle-details-create-nested-one-without-vehicle.input';

@InputType()
export class VehicleCreateWithoutVehicleBrandInput {

    @HideField()
    vehicleId?: bigint | number;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => ServiceRequestCreateNestedManyWithoutVehicleInput, {nullable:true})
    @Type(() => ServiceRequestCreateNestedManyWithoutVehicleInput)
    vehicleAssociatedServiceRequests?: ServiceRequestCreateNestedManyWithoutVehicleInput;

    @Field(() => ServiceCreateNestedManyWithoutVehicleInput, {nullable:true})
    @Type(() => ServiceCreateNestedManyWithoutVehicleInput)
    services?: ServiceCreateNestedManyWithoutVehicleInput;

    @Field(() => VehicleModelCreateNestedOneWithoutVehiclesInput, {nullable:false})
    vehicleModel!: VehicleModelCreateNestedOneWithoutVehiclesInput;

    @Field(() => PersonCreateNestedOneWithoutVehiclesInput, {nullable:false})
    @Type(() => PersonCreateNestedOneWithoutVehiclesInput)
    person!: PersonCreateNestedOneWithoutVehiclesInput;

    @Field(() => VehicleDetailsCreateNestedOneWithoutVehicleInput, {nullable:true})
    vehiclesDetails?: VehicleDetailsCreateNestedOneWithoutVehicleInput;
}
