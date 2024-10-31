import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { AddressPersonCountAggregate } from './address-person-count-aggregate.output';
import { AddressPersonAvgAggregate } from './address-person-avg-aggregate.output';
import { AddressPersonSumAggregate } from './address-person-sum-aggregate.output';
import { AddressPersonMinAggregate } from './address-person-min-aggregate.output';
import { AddressPersonMaxAggregate } from './address-person-max-aggregate.output';

@ObjectType()
export class AddressPersonGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    addressId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint | number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => AddressPersonCountAggregate, {nullable:true})
    _count?: AddressPersonCountAggregate;

    @Field(() => AddressPersonAvgAggregate, {nullable:true})
    _avg?: AddressPersonAvgAggregate;

    @Field(() => AddressPersonSumAggregate, {nullable:true})
    _sum?: AddressPersonSumAggregate;

    @Field(() => AddressPersonMinAggregate, {nullable:true})
    _min?: AddressPersonMinAggregate;

    @Field(() => AddressPersonMaxAggregate, {nullable:true})
    _max?: AddressPersonMaxAggregate;
}
