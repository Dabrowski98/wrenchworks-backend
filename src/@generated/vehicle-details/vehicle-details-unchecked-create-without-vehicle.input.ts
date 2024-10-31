import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class VehicleDetailsUncheckedCreateWithoutVehicleInput {

    @Field(() => Int, {nullable:true})
    yearOfProduction?: number;

    @Field(() => String, {nullable:true})
    VIN?: string;

    @Field(() => String, {nullable:true})
    engineCapacity?: string;

    @Field(() => String, {nullable:true})
    licensePlate?: string;

    @Field(() => String, {nullable:true})
    fuelType?: string;

    @Field(() => String, {nullable:true})
    engineNo?: string;

    @Field(() => String, {nullable:true})
    bodyColor?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
