import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkshopJobCategoryCountAggregate } from './workshop-job-category-count-aggregate.output';
import { WorkshopJobCategoryAvgAggregate } from './workshop-job-category-avg-aggregate.output';
import { WorkshopJobCategorySumAggregate } from './workshop-job-category-sum-aggregate.output';
import { WorkshopJobCategoryMinAggregate } from './workshop-job-category-min-aggregate.output';
import { WorkshopJobCategoryMaxAggregate } from './workshop-job-category-max-aggregate.output';

@ObjectType()
export class AggregateWorkshopJobCategory {

    @Field(() => WorkshopJobCategoryCountAggregate, {nullable:true})
    _count?: WorkshopJobCategoryCountAggregate;

    @Field(() => WorkshopJobCategoryAvgAggregate, {nullable:true})
    _avg?: WorkshopJobCategoryAvgAggregate;

    @Field(() => WorkshopJobCategorySumAggregate, {nullable:true})
    _sum?: WorkshopJobCategorySumAggregate;

    @Field(() => WorkshopJobCategoryMinAggregate, {nullable:true})
    _min?: WorkshopJobCategoryMinAggregate;

    @Field(() => WorkshopJobCategoryMaxAggregate, {nullable:true})
    _max?: WorkshopJobCategoryMaxAggregate;
}
