import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';

@InputType()
export class VehicleUncheckedUpdateManyWithoutUserInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    customerId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    modelId?: bigint | number;

    }