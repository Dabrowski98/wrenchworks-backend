import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { JoinWorkshopRequestCountAggregate } from './join-workshop-request-count-aggregate.output';
import { JoinWorkshopRequestAvgAggregate } from './join-workshop-request-avg-aggregate.output';
import { JoinWorkshopRequestSumAggregate } from './join-workshop-request-sum-aggregate.output';
import { JoinWorkshopRequestMinAggregate } from './join-workshop-request-min-aggregate.output';
import { JoinWorkshopRequestMaxAggregate } from './join-workshop-request-max-aggregate.output';

@ObjectType()
export class AggregateJoinWorkshopRequest {

    @Field(() => JoinWorkshopRequestCountAggregate, {nullable:true})
    _count?: JoinWorkshopRequestCountAggregate;

    @Field(() => JoinWorkshopRequestAvgAggregate, {nullable:true})
    _avg?: JoinWorkshopRequestAvgAggregate;

    @Field(() => JoinWorkshopRequestSumAggregate, {nullable:true})
    _sum?: JoinWorkshopRequestSumAggregate;

    @Field(() => JoinWorkshopRequestMinAggregate, {nullable:true})
    _min?: JoinWorkshopRequestMinAggregate;

    @Field(() => JoinWorkshopRequestMaxAggregate, {nullable:true})
    _max?: JoinWorkshopRequestMaxAggregate;
}
