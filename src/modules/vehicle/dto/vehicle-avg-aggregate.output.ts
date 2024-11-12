import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class VehicleAvgAggregate {

    @Field(() => Float, {nullable:true})
    vehicleId?: number;

    @Field(() => Float, {nullable:true})
    personId?: number;

    @Field(() => Float, {nullable:true})
    modelId?: number;
}
