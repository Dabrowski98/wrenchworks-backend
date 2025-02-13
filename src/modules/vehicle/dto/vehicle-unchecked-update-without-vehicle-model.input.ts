import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput } from '../../service-request/dto/service-request-unchecked-update-many-without-vehicle-nested.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceUncheckedUpdateManyWithoutVehicleNestedInput } from '../../service/dto/service-unchecked-update-many-without-vehicle-nested.input';
import { VehicleDetailsUncheckedUpdateOneWithoutVehicleNestedInput } from '../../vehicle-details/dto/vehicle-details-unchecked-update-one-without-vehicle-nested.input';

@InputType()
export class VehicleUncheckedUpdateWithoutVehicleModelInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    customerId?: bigint | number;

    @Field(() => ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput)
    @ValidateNested()
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput)
    serviceRequests?: ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput;

    @Field(() => ServiceUncheckedUpdateManyWithoutVehicleNestedInput, {nullable:true})
    @Type(() => ServiceUncheckedUpdateManyWithoutVehicleNestedInput)
    @ValidateNested()
    @Type(() => ServiceUncheckedUpdateManyWithoutVehicleNestedInput)
    services?: ServiceUncheckedUpdateManyWithoutVehicleNestedInput;

    @Field(() => VehicleDetailsUncheckedUpdateOneWithoutVehicleNestedInput, {nullable:true})
    @ValidateNested()
    vehicleDetails?: VehicleDetailsUncheckedUpdateOneWithoutVehicleNestedInput;
}