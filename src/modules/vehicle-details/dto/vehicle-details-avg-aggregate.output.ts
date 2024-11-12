import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class VehicleDetailsAvgAggregate {

    @Field(() => Float, {nullable:true})
    vehicleDetailsId?: number;

    @Field(() => Float, {nullable:true})
    vehicleId?: number;

    @Field(() => Float, {nullable:true})
    yearOfProduction?: number;
}
