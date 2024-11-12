import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { VehicleModelCountAggregate } from './vehicle-model-count-aggregate.output';
import { VehicleModelAvgAggregate } from './vehicle-model-avg-aggregate.output';
import { VehicleModelSumAggregate } from './vehicle-model-sum-aggregate.output';
import { VehicleModelMinAggregate } from './vehicle-model-min-aggregate.output';
import { VehicleModelMaxAggregate } from './vehicle-model-max-aggregate.output';

@ObjectType()
export class VehicleModelGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    modelId!: bigint | number;

    @Field(() => String, {nullable:false})
    modelName!: string;

    @Field(() => String, {nullable:false})
    brandName!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VehicleModelCountAggregate, {nullable:true})
    _count?: VehicleModelCountAggregate;

    @Field(() => VehicleModelAvgAggregate, {nullable:true})
    _avg?: VehicleModelAvgAggregate;

    @Field(() => VehicleModelSumAggregate, {nullable:true})
    _sum?: VehicleModelSumAggregate;

    @Field(() => VehicleModelMinAggregate, {nullable:true})
    _min?: VehicleModelMinAggregate;

    @Field(() => VehicleModelMaxAggregate, {nullable:true})
    _max?: VehicleModelMaxAggregate;
}
