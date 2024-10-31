import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { VehicleBrandCreateNestedOneWithoutVehicleModelsInput } from '../vehicle-brand/vehicle-brand-create-nested-one-without-vehicle-models.input';

@InputType()
export class VehicleModelCreateWithoutVehiclesInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    modelId?: bigint | number;

    @Field(() => String, {nullable:false})
    modelName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VehicleBrandCreateNestedOneWithoutVehicleModelsInput, {nullable:false})
    vehiclesBrand!: VehicleBrandCreateNestedOneWithoutVehicleModelsInput;
}
