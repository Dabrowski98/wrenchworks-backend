import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class VehicleAvgAggregate {

    @Field(() => Float, {nullable:true})
    vehicleId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    guestId?: number;

    @Field(() => Float, {nullable:true})
    modelId?: number;
}
