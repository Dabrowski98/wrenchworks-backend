import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput } from '../../service-request/dto/service-request-unchecked-create-nested-many-without-vehicle.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerUncheckedCreateNestedManyWithoutVehiclesInput } from '../../customer/dto/customer-unchecked-create-nested-many-without-vehicles.input';
import { VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput } from '../../vehicle-details/dto/vehicle-details-unchecked-create-nested-one-without-vehicle.input';

@InputType()
export class VehicleUncheckedCreateWithoutServicesInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    modelId!: bigint | number;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput)
    @ValidateNested()
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput)
    serviceRequests?: ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput;

    @Field(() => CustomerUncheckedCreateNestedManyWithoutVehiclesInput, {nullable:true})
    @Type(() => CustomerUncheckedCreateNestedManyWithoutVehiclesInput)
    @ValidateNested()
    @Type(() => CustomerUncheckedCreateNestedManyWithoutVehiclesInput)
    customers?: CustomerUncheckedCreateNestedManyWithoutVehiclesInput;

    @Field(() => VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput, {nullable:true})
    vehicleDetails?: VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput;
}
