import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput } from '../service-request/service-request-unchecked-create-nested-many-without-vehicle.input';
import { Type } from 'class-transformer';
import { ServiceUncheckedCreateNestedManyWithoutVehicleInput } from '../service/service-unchecked-create-nested-many-without-vehicle.input';

@InputType()
export class VehicleUncheckedCreateWithoutVehiclesDetailsInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    modelId!: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput, {nullable:true})
    @Type(() => ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput)
    vehicleAssociatedServiceRequests?: ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput;

    @Field(() => ServiceUncheckedCreateNestedManyWithoutVehicleInput, {nullable:true})
    @Type(() => ServiceUncheckedCreateNestedManyWithoutVehicleInput)
    services?: ServiceUncheckedCreateNestedManyWithoutVehicleInput;
}
