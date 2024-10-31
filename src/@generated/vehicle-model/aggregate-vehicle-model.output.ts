import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VehicleModelCountAggregate } from './vehicle-model-count-aggregate.output';
import { VehicleModelAvgAggregate } from './vehicle-model-avg-aggregate.output';
import { VehicleModelSumAggregate } from './vehicle-model-sum-aggregate.output';
import { VehicleModelMinAggregate } from './vehicle-model-min-aggregate.output';
import { VehicleModelMaxAggregate } from './vehicle-model-max-aggregate.output';

@ObjectType()
export class AggregateVehicleModel {

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
