import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { ServiceUncheckedCreateNestedManyWithoutVehicleInput } from '../../service/dto/service-unchecked-create-nested-many-without-vehicle.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput } from '../../vehicle-details/dto/vehicle-details-unchecked-create-nested-one-without-vehicle.input';

@InputType()
export class VehicleUncheckedCreateWithoutServiceRequestsInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    customerId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    modelId!: bigint | number;

    @Field(() => ServiceUncheckedCreateNestedManyWithoutVehicleInput, {nullable:true})
    @Type(() => ServiceUncheckedCreateNestedManyWithoutVehicleInput)
    @ValidateNested()
    @Type(() => ServiceUncheckedCreateNestedManyWithoutVehicleInput)
    services?: ServiceUncheckedCreateNestedManyWithoutVehicleInput;

    @Field(() => VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput, {nullable:true})
    @ValidateNested()
    vehicleDetails?: VehicleDetailsUncheckedCreateNestedOneWithoutVehicleInput;
}