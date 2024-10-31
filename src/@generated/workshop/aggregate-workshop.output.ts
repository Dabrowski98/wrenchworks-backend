import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkshopCountAggregate } from './workshop-count-aggregate.output';
import { WorkshopAvgAggregate } from './workshop-avg-aggregate.output';
import { WorkshopSumAggregate } from './workshop-sum-aggregate.output';
import { WorkshopMinAggregate } from './workshop-min-aggregate.output';
import { WorkshopMaxAggregate } from './workshop-max-aggregate.output';

@ObjectType()
export class AggregateWorkshop {

    @Field(() => WorkshopCountAggregate, {nullable:true})
    _count?: WorkshopCountAggregate;

    @Field(() => WorkshopAvgAggregate, {nullable:true})
    _avg?: WorkshopAvgAggregate;

    @Field(() => WorkshopSumAggregate, {nullable:true})
    _sum?: WorkshopSumAggregate;

    @Field(() => WorkshopMinAggregate, {nullable:true})
    _min?: WorkshopMinAggregate;

    @Field(() => WorkshopMaxAggregate, {nullable:true})
    _max?: WorkshopMaxAggregate;
}
