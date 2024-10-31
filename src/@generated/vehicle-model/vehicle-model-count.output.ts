import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VehicleModelCount {

    @Field(() => Int, {nullable:false})
    vehicles?: number;
}
