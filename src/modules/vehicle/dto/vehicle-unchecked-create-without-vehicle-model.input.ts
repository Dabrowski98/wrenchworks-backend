import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput } from '../../service-request/dto/service-request-unchecked-create-nested-many-without-vehicle.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceUncheckedCreateNestedManyWithoutVehicleInput } from '../../service/dto/service-unchecked-create-nested-many-without-vehicle.input';
import { CustomerUncheckedCreateNestedManyWithoutVehiclesInput } from '../../customer/dto/customer-unchecked-create-nested-many-without-vehicles.input';
import { VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput } from '../../vehicle-details/dto/vehicle-details-unchecked-create-nested-one-without-vehicle.input';

@InputType()
export class VehicleUncheckedCreateWithoutVehicleModelInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId?: bigint | number;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput)
    @ValidateNested()
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput)
    serviceRequests?: ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput;

    @Field(() => ServiceUncheckedCreateNestedManyWithoutVehicleInput, {nullable:true})
    @Type(() => ServiceUncheckedCreateNestedManyWithoutVehicleInput)
    @ValidateNested()
    @Type(() => ServiceUncheckedCreateNestedManyWithoutVehicleInput)
    services?: ServiceUncheckedCreateNestedManyWithoutVehicleInput;

    @Field(() => CustomerUncheckedCreateNestedManyWithoutVehiclesInput, {nullable:true})
    @Type(() => CustomerUncheckedCreateNestedManyWithoutVehiclesInput)
    @ValidateNested()
    @Type(() => CustomerUncheckedCreateNestedManyWithoutVehiclesInput)
    customers?: CustomerUncheckedCreateNestedManyWithoutVehiclesInput;

    @Field(() => VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput, {nullable:true})
    @ValidateNested()
    vehicleDetails?: VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput;
}
