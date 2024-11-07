import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VehicleCount {

    @Field(() => Int, {nullable:false})
    vehicleAssociatedServiceRequests?: number;

    @Field(() => Int, {nullable:false})
    services?: number;
}
