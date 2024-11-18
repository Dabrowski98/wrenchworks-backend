import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';

@InputType()
export class VehicleCreateManyPersonInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    @Validator.IsNotEmpty({ message: 'Model ID is required' })
    modelId!: bigint | number;

}
