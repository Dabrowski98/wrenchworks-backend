import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { JobCategoryCountAggregate } from './job-category-count-aggregate.output';
import { JobCategoryAvgAggregate } from './job-category-avg-aggregate.output';
import { JobCategorySumAggregate } from './job-category-sum-aggregate.output';
import { JobCategoryMinAggregate } from './job-category-min-aggregate.output';
import { JobCategoryMaxAggregate } from './job-category-max-aggregate.output';

@ObjectType()
export class JobCategoryGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    categoryId!: bigint | number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    parentId?: bigint | number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:false})
    isPopular!: boolean;

    @Field(() => JobCategoryCountAggregate, {nullable:true})
    _count?: JobCategoryCountAggregate;

    @Field(() => JobCategoryAvgAggregate, {nullable:true})
    _avg?: JobCategoryAvgAggregate;

    @Field(() => JobCategorySumAggregate, {nullable:true})
    _sum?: JobCategorySumAggregate;

    @Field(() => JobCategoryMinAggregate, {nullable:true})
    _min?: JobCategoryMinAggregate;

    @Field(() => JobCategoryMaxAggregate, {nullable:true})
    _max?: JobCategoryMaxAggregate;
}
