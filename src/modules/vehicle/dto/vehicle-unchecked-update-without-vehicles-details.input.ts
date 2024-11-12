import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput } from '../../service-request/dto/service-request-unchecked-update-many-without-vehicle-nested.input';
import { Type } from 'class-transformer';
import { ServiceUncheckedUpdateManyWithoutVehicleNestedInput } from '../../service/dto/service-unchecked-update-many-without-vehicle-nested.input';

@InputType()
export class VehicleUncheckedUpdateWithoutVehiclesDetailsInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    personId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    modelId?: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput)
    vehicleAssociatedServiceRequests?: ServiceRequestUncheckedUpdateManyWithoutVehicleNestedInput;

    @Field(() => ServiceUncheckedUpdateManyWithoutVehicleNestedInput, {nullable:true})
    @Type(() => ServiceUncheckedUpdateManyWithoutVehicleNestedInput)
    services?: ServiceUncheckedUpdateManyWithoutVehicleNestedInput;
}
