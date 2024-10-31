import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { AddressCountAggregate } from './address-count-aggregate.output';
import { AddressAvgAggregate } from './address-avg-aggregate.output';
import { AddressSumAggregate } from './address-sum-aggregate.output';
import { AddressMinAggregate } from './address-min-aggregate.output';
import { AddressMaxAggregate } from './address-max-aggregate.output';

@ObjectType()
export class AddressGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    addressId!: bigint | number;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => String, {nullable:false})
    region!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:true})
    street?: string;

    @Field(() => String, {nullable:false})
    buildingNo!: string;

    @Field(() => String, {nullable:true})
    flatNo?: string;

    @Field(() => String, {nullable:false})
    postCode!: string;

    @Field(() => AddressCountAggregate, {nullable:true})
    _count?: AddressCountAggregate;

    @Field(() => AddressAvgAggregate, {nullable:true})
    _avg?: AddressAvgAggregate;

    @Field(() => AddressSumAggregate, {nullable:true})
    _sum?: AddressSumAggregate;

    @Field(() => AddressMinAggregate, {nullable:true})
    _min?: AddressMinAggregate;

    @Field(() => AddressMaxAggregate, {nullable:true})
    _max?: AddressMaxAggregate;
}
