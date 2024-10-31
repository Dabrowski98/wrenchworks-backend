import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class VehicleModelSumAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    modelId?: bigint | number;
}
