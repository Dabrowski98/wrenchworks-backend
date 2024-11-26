import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput } from '../../service-request/dto/service-request-unchecked-update-many-without-vehicle-nested.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CustomerUncheckedUpdateManyWithoutVehiclesNestedInput } from '../../customer/dto/customer-unchecked-update-many-without-vehicles-nested.input';
import { VehicleDetailsUncheckedUpdateOneWithoutVehicleNestedInput } from '../../vehicle-details/dto/vehicle-details-unchecked-update-one-without-vehicle-nested.input';

@InputType()
export class VehicleUncheckedUpdateWithoutServicesInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    modelId?: bigint | number;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput)
    @ValidateNested()
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput)
    serviceRequests?: ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput;

    @Field(() => CustomerUncheckedUpdateManyWithoutVehiclesNestedInput, {nullable:true})
    @Type(() => CustomerUncheckedUpdateManyWithoutVehiclesNestedInput)
    @ValidateNested()
    @Type(() => CustomerUncheckedUpdateManyWithoutVehiclesNestedInput)
    customers?: CustomerUncheckedUpdateManyWithoutVehiclesNestedInput;

    @Field(() => VehicleDetailsUncheckedUpdateOneWithoutVehicleNestedInput, {nullable:true})
    vehicleDetails?: VehicleDetailsUncheckedUpdateOneWithoutVehicleNestedInput;
}
