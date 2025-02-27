import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobCategoryWhereInput } from './job-category-where.input';
import { Type } from 'class-transformer';
import { JobCategoryOrderByWithRelationInput } from './job-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { JobCategoryWhereUniqueInput } from './job-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { JobCategoryCountAggregateInput } from './job-category-count-aggregate.input';
import { JobCategoryAvgAggregateInput } from './job-category-avg-aggregate.input';
import { JobCategorySumAggregateInput } from './job-category-sum-aggregate.input';
import { JobCategoryMinAggregateInput } from './job-category-min-aggregate.input';
import { JobCategoryMaxAggregateInput } from './job-category-max-aggregate.input';

@ArgsType()
export class JobCategoryAggregateArgs {

    @Field(() => JobCategoryWhereInput, {nullable:true})
    @Type(() => JobCategoryWhereInput)
    where?: JobCategoryWhereInput;

    @Field(() => [JobCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JobCategoryOrderByWithRelationInput>;

    @Field(() => JobCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<JobCategoryWhereUniqueInput, 'categoryId' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => JobCategoryCountAggregateInput, {nullable:true})
    _count?: JobCategoryCountAggregateInput;

    @Field(() => JobCategoryAvgAggregateInput, {nullable:true})
    _avg?: JobCategoryAvgAggregateInput;

    @Field(() => JobCategorySumAggregateInput, {nullable:true})
    _sum?: JobCategorySumAggregateInput;

    @Field(() => JobCategoryMinAggregateInput, {nullable:true})
    _min?: JobCategoryMinAggregateInput;

    @Field(() => JobCategoryMaxAggregateInput, {nullable:true})
    _max?: JobCategoryMaxAggregateInput;
}
