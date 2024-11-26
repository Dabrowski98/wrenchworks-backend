import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GuestCountAggregate } from './guest-count-aggregate.output';
import { GuestAvgAggregate } from './guest-avg-aggregate.output';
import { GuestSumAggregate } from './guest-sum-aggregate.output';
import { GuestMinAggregate } from './guest-min-aggregate.output';
import { GuestMaxAggregate } from './guest-max-aggregate.output';

@ObjectType()
export class GuestGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    guestId!: bigint | number;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:true})
    telephoneNumber?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    NIP?: string;

    @Field(() => String, {nullable:true})
    companyName?: string;

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
