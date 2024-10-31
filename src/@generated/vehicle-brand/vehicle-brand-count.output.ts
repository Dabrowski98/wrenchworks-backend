import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VehicleBrandCount {

    @Field(() => Int, {nullable:false})
    vehicles?: number;

    @Field(() => Int, {nullable:false})
    vehicleModels?: number;
}
