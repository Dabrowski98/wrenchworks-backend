import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { JobCategoryCountOrderByAggregateInput } from './job-category-count-order-by-aggregate.input';
import { JobCategoryAvgOrderByAggregateInput } from './job-category-avg-order-by-aggregate.input';
import { JobCategoryMaxOrderByAggregateInput } from './job-category-max-order-by-aggregate.input';
import { JobCategoryMinOrderByAggregateInput } from './job-category-min-order-by-aggregate.input';
import { JobCategorySumOrderByAggregateInput } from './job-category-sum-order-by-aggregate.input';

@InputType()
export class JobCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    parentId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isPopular?: keyof typeof SortOrder;

    @Field(() => JobCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: JobCategoryCountOrderByAggregateInput;

    @Field(() => JobCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: JobCategoryAvgOrderByAggregateInput;

    @Field(() => JobCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: JobCategoryMaxOrderByAggregateInput;

    @Field(() => JobCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: JobCategoryMinOrderByAggregateInput;

    @Field(() => JobCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: JobCategorySumOrderByAggregateInput;
}
