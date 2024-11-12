import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { JobCountOrderByAggregateInput } from './job-count-order-by-aggregate.input';
import { JobAvgOrderByAggregateInput } from './job-avg-order-by-aggregate.input';
import { JobMaxOrderByAggregateInput } from './job-max-order-by-aggregate.input';
import { JobMinOrderByAggregateInput } from './job-min-order-by-aggregate.input';
import { JobSumOrderByAggregateInput } from './job-sum-order-by-aggregate.input';

@InputType()
export class JobOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    jobId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isPopular?: keyof typeof SortOrder;

    @Field(() => JobCountOrderByAggregateInput, {nullable:true})
    _count?: JobCountOrderByAggregateInput;

    @Field(() => JobAvgOrderByAggregateInput, {nullable:true})
    _avg?: JobAvgOrderByAggregateInput;

    @Field(() => JobMaxOrderByAggregateInput, {nullable:true})
    _max?: JobMaxOrderByAggregateInput;

    @Field(() => JobMinOrderByAggregateInput, {nullable:true})
    _min?: JobMinOrderByAggregateInput;

    @Field(() => JobSumOrderByAggregateInput, {nullable:true})
    _sum?: JobSumOrderByAggregateInput;
}
