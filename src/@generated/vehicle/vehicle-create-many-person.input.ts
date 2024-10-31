import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class VehicleCreateManyPersonInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    vehicleId?: bigint | number;

    @Field(() => String, {nullable:false})
    brandName!: string;

    @Field(() => String, {nullable:false})
    modelId!: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
