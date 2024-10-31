import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VehicleDetailsCountAggregate } from './vehicle-details-count-aggregate.output';
import { VehicleDetailsAvgAggregate } from './vehicle-details-avg-aggregate.output';
import { VehicleDetailsSumAggregate } from './vehicle-details-sum-aggregate.output';
import { VehicleDetailsMinAggregate } from './vehicle-details-min-aggregate.output';
import { VehicleDetailsMaxAggregate } from './vehicle-details-max-aggregate.output';

@ObjectType()
export class AggregateVehicleDetails {

    @Field(() => VehicleDetailsCountAggregate, {nullable:true})
    _count?: VehicleDetailsCountAggregate;

    @Field(() => VehicleDetailsAvgAggregate, {nullable:true})
    _avg?: VehicleDetailsAvgAggregate;

    @Field(() => VehicleDetailsSumAggregate, {nullable:true})
    _sum?: VehicleDetailsSumAggregate;

    @Field(() => VehicleDetailsMinAggregate, {nullable:true})
    _min?: VehicleDetailsMinAggregate;

    @Field(() => VehicleDetailsMaxAggregate, {nullable:true})
    _max?: VehicleDetailsMaxAggregate;
}
