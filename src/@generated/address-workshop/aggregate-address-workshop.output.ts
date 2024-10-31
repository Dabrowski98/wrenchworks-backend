import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AddressWorkshopCountAggregate } from './address-workshop-count-aggregate.output';
import { AddressWorkshopAvgAggregate } from './address-workshop-avg-aggregate.output';
import { AddressWorkshopSumAggregate } from './address-workshop-sum-aggregate.output';
import { AddressWorkshopMinAggregate } from './address-workshop-min-aggregate.output';
import { AddressWorkshopMaxAggregate } from './address-workshop-max-aggregate.output';

@ObjectType()
export class AggregateAddressWorkshop {

    @Field(() => AddressWorkshopCountAggregate, {nullable:true})
    _count?: AddressWorkshopCountAggregate;

    @Field(() => AddressWorkshopAvgAggregate, {nullable:true})
    _avg?: AddressWorkshopAvgAggregate;

    @Field(() => AddressWorkshopSumAggregate, {nullable:true})
    _sum?: AddressWorkshopSumAggregate;

    @Field(() => AddressWorkshopMinAggregate, {nullable:true})
    _min?: AddressWorkshopMinAggregate;

    @Field(() => AddressWorkshopMaxAggregate, {nullable:true})
    _max?: AddressWorkshopMaxAggregate;
}
