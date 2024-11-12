import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkshopJobCountAggregate } from './workshop-job-count-aggregate.output';
import { WorkshopJobAvgAggregate } from './workshop-job-avg-aggregate.output';
import { WorkshopJobSumAggregate } from './workshop-job-sum-aggregate.output';
import { WorkshopJobMinAggregate } from './workshop-job-min-aggregate.output';
import { WorkshopJobMaxAggregate } from './workshop-job-max-aggregate.output';

@ObjectType()
export class AggregateWorkshopJob {

    @Field(() => WorkshopJobCountAggregate, {nullable:true})
    _count?: WorkshopJobCountAggregate;

    @Field(() => WorkshopJobAvgAggregate, {nullable:true})
    _avg?: WorkshopJobAvgAggregate;

    @Field(() => WorkshopJobSumAggregate, {nullable:true})
    _sum?: WorkshopJobSumAggregate;

    @Field(() => WorkshopJobMinAggregate, {nullable:true})
    _min?: WorkshopJobMinAggregate;

    @Field(() => WorkshopJobMaxAggregate, {nullable:true})
    _max?: WorkshopJobMaxAggregate;
}
