import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { VehicleCountAggregate } from './vehicle-count-aggregate.output';
import { VehicleAvgAggregate } from './vehicle-avg-aggregate.output';
import { VehicleSumAggregate } from './vehicle-sum-aggregate.output';
import { VehicleMinAggregate } from './vehicle-min-aggregate.output';
import { VehicleMaxAggregate } from './vehicle-max-aggregate.output';

@ObjectType()
export class VehicleGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    vehicleId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    modelId!: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => VehicleCountAggregate, {nullable:true})
    _count?: VehicleCountAggregate;

    @Field(() => VehicleAvgAggregate, {nullable:true})
    _avg?: VehicleAvgAggregate;

    @Field(() => VehicleSumAggregate, {nullable:true})
    _sum?: VehicleSumAggregate;

    @Field(() => VehicleMinAggregate, {nullable:true})
    _min?: VehicleMinAggregate;

    @Field(() => VehicleMaxAggregate, {nullable:true})
    _max?: VehicleMaxAggregate;
}
