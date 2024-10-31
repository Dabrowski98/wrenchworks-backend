import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { VehicleCreateNestedManyWithoutVehicleModelInput } from '../vehicle/vehicle-create-nested-many-without-vehicle-model.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleModelCreateWithoutVehiclesBrandInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    modelId?: bigint | number;

    @Field(() => String, {nullable:false})
    modelName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VehicleCreateNestedManyWithoutVehicleModelInput, {nullable:true})
    @Type(() => VehicleCreateNestedManyWithoutVehicleModelInput)
    vehicles?: VehicleCreateNestedManyWithoutVehicleModelInput;
}
