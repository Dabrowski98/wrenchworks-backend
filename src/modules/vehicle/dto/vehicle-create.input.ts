import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { VehicleDetailsCreateWithoutVehicleInput } from 'src/modules/vehicle-details';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class VehicleCreateInput {

    @Field(() => GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ message: 'Model ID is required' })
    modelId!: bigint;

    @Field(() => GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ message: 'Person ID is required' })
    personId!: bigint;

    @Field(() => VehicleDetailsCreateWithoutVehicleInput, {nullable:true})
    @Validator.ValidateNested()
    @Validator.IsOptional()
    vehiclesDetails?: VehicleDetailsCreateWithoutVehicleInput;
}

