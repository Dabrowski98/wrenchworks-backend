import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceUncheckedCreateNestedManyWithoutVehicleInput } from '../../service/dto/service-unchecked-create-nested-many-without-vehicle.input';
import { Type } from 'class-transformer';
import { VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput } from '../../vehicle-details/dto/vehicle-details-unchecked-create-nested-one-without-vehicle.input';

@InputType()
export class VehicleUncheckedCreateWithoutVehicleAssociatedServiceRequestsInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    modelId!: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ServiceUncheckedCreateNestedManyWithoutVehicleInput, {nullable:true})
    @Type(() => ServiceUncheckedCreateNestedManyWithoutVehicleInput)
    services?: ServiceUncheckedCreateNestedManyWithoutVehicleInput;

    @Field(() => VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput, {nullable:true})
    vehiclesDetails?: VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput;
}
