import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { SessionDataCountAggregate } from './session-data-count-aggregate.output';
import { SessionDataAvgAggregate } from './session-data-avg-aggregate.output';
import { SessionDataSumAggregate } from './session-data-sum-aggregate.output';
import { SessionDataMinAggregate } from './session-data-min-aggregate.output';
import { SessionDataMaxAggregate } from './session-data-max-aggregate.output';

@ObjectType()
export class SessionDataGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    sessionDataId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint | number;

    @Field(() => String, {nullable:false})
    refreshToken!: string;

    @Field(() => String, {nullable:false})
    deviceId!: string;

    @Field(() => String, {nullable:true})
    deviceName?: string;

    @Field(() => String, {nullable:true})
    deviceInfo?: string;

    @Field(() => String, {nullable:true})
    ipAddress?: string;

    @Field(() => Date, {nullable:false})
    issuedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    revoked!: boolean;

    @Field(() => SessionDataCountAggregate, {nullable:true})
    _count?: SessionDataCountAggregate;

    @Field(() => SessionDataAvgAggregate, {nullable:true})
    _avg?: SessionDataAvgAggregate;

    @Field(() => SessionDataSumAggregate, {nullable:true})
    _sum?: SessionDataSumAggregate;

    @Field(() => SessionDataMinAggregate, {nullable:true})
    _min?: SessionDataMinAggregate;

    @Field(() => SessionDataMaxAggregate, {nullable:true})
    _max?: SessionDataMaxAggregate;
}
