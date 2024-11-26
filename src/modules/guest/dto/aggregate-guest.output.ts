import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GuestCountAggregate } from './guest-count-aggregate.output';
import { GuestAvgAggregate } from './guest-avg-aggregate.output';
import { GuestSumAggregate } from './guest-sum-aggregate.output';
import { GuestMinAggregate } from './guest-min-aggregate.output';
import { GuestMaxAggregate } from './guest-max-aggregate.output';

@ObjectType()
export class AggregateGuest {

    @Field(() => GuestCountAggregate, {nullable:true})
    _count?: GuestCountAggregate;

    @Field(() => GuestAvgAggregate, {nullable:true})
    _avg?: GuestAvgAggregate;

    @Field(() => GuestSumAggregate, {nullable:true})
    _sum?: GuestSumAggregate;

    @Field(() => GuestMinAggregate, {nullable:true})
    _min?: GuestMinAggregate;

    @Field(() => GuestMaxAggregate, {nullable:true})
    _max?: GuestMaxAggregate;
}
