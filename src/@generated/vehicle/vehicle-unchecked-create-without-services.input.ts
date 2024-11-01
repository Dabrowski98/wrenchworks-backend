import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput } from '../service-request/service-request-unchecked-create-nested-many-without-vehicle.input';
import { Type } from 'class-transformer';
import { VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput } from '../vehicle-details/vehicle-details-unchecked-create-nested-one-without-vehicle.input';

@InputType()
export class VehicleUncheckedCreateWithoutServicesInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint | number;

    @Field(() => String, {nullable:false})
    brandName!: string;

    @Field(() => String, {nullable:false})
    modelId!: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput)
    vehicleAssociatedServiceRequests?: ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput;

    @Field(() => VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput, {nullable:true})
    vehiclesDetails?: VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput;
}
