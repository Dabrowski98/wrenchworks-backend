import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkshopDetailsCountAggregate } from './workshop-details-count-aggregate.output';
import { WorkshopDetailsAvgAggregate } from './workshop-details-avg-aggregate.output';
import { WorkshopDetailsSumAggregate } from './workshop-details-sum-aggregate.output';
import { WorkshopDetailsMinAggregate } from './workshop-details-min-aggregate.output';
import { WorkshopDetailsMaxAggregate } from './workshop-details-max-aggregate.output';

@ObjectType()
export class AggregateWorkshopDetails {

    @Field(() => WorkshopDetailsCountAggregate, {nullable:true})
    _count?: WorkshopDetailsCountAggregate;

    @Field(() => WorkshopDetailsAvgAggregate, {nullable:true})
    _avg?: WorkshopDetailsAvgAggregate;

    @Field(() => WorkshopDetailsSumAggregate, {nullable:true})
    _sum?: WorkshopDetailsSumAggregate;

    @Field(() => WorkshopDetailsMinAggregate, {nullable:true})
    _min?: WorkshopDetailsMinAggregate;

    @Field(() => WorkshopDetailsMaxAggregate, {nullable:true})
    _max?: WorkshopDetailsMaxAggregate;
}
