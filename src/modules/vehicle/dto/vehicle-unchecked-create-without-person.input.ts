import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestUncheckedCreateNestedManyWithoutVehicleInput } from '../../service-request/dto/service-request-unchecked-create-nested-many-without-vehicle.input';
import { Type } from 'class-transformer';
import { ServiceUncheckedCreateNestedManyWithoutVehicleInput } from '../../service/dto/service-unchecked-create-nested-many-without-vehicle.input';
import { VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput } from '../../vehicle-details/dto/vehicle-details-unchecked-create-nested-one-without-vehicle.input';

@InputType()
export class VehicleUncheckedCreateWithoutPersonInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

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

    @Field(() => VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput, {nullable:true})
    vehiclesDetails?: VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput;
}
