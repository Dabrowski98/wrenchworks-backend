import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class VehicleModelAvgAggregate {

    @Field(() => Float, {nullable:true})
    modelId?: number;
}
