import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestCreateNestedManyWithoutVehicleInput } from '../service-request/service-request-create-nested-many-without-vehicle.input';
import { Type } from 'class-transformer';
import { ServiceCreateNestedManyWithoutVehicleInput } from '../service/service-create-nested-many-without-vehicle.input';
import { VehicleBrandCreateNestedOneWithoutVehiclesInput } from '../vehicle-brand/vehicle-brand-create-nested-one-without-vehicles.input';
import { VehicleModelCreateNestedOneWithoutVehiclesInput } from '../vehicle-model/vehicle-model-create-nested-one-without-vehicles.input';
import { VehicleDetailsCreateNestedOneWithoutVehicleInput } from '../vehicle-details/vehicle-details-create-nested-one-without-vehicle.input';

@InputType()
export class VehicleCreateWithoutPersonInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
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

    @Field(() => VehicleModelCreateNestedOneWithoutVehiclesInput, {nullable:false})
    vehicleModel!: VehicleModelCreateNestedOneWithoutVehiclesInput;

    @Field(() => VehicleDetailsCreateNestedOneWithoutVehicleInput, {nullable:true})
    vehiclesDetails?: VehicleDetailsCreateNestedOneWithoutVehicleInput;
}