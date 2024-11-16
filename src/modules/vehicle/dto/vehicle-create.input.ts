import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { VehicleDetailsCreateWithoutVehicleInput } from 'src/modules/vehicle-details';
import { GraphQLBigInt } from 'graphql-scalars';
import { CREATE, UPDATE } from 'src/constants/validation-groups';

@InputType()
export class VehicleCreateInput {

    @Field(() => GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Model ID is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    modelId!: bigint;

    @Field(() => GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Person ID is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    personId!: bigint;
  
    @Field(() => VehicleDetailsCreateWithoutVehicleInput, {nullable:true})
    vehiclesDetails?: VehicleDetailsCreateWithoutVehicleInput;
}

