import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VehicleDetailsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    vehicleDetailsId?: true;

    @Field(() => Boolean, {nullable:true})
    vehicleId?: true;

    @Field(() => Boolean, {nullable:true})
    yearOfProduction?: true;

    @Field(() => Boolean, {nullable:true})
    VIN?: true;

    @Field(() => Boolean, {nullable:true})
    engineCapacity?: true;

    @Field(() => Boolean, {nullable:true})
    countryOfRegistration?: true;

    @Field(() => Boolean, {nullable:true})
    licensePlate?: true;

    @Field(() => Boolean, {nullable:true})
    fuelType?: true;

    @Field(() => Boolean, {nullable:true})
    engineNo?: true;

    @Field(() => Boolean, {nullable:true})
    bodyColor?: true;

    @Field(() => Boolean, {nullable:true})
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
