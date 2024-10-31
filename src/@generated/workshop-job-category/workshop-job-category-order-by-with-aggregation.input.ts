import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkshopJobCategoryCountOrderByAggregateInput } from './workshop-job-category-count-order-by-aggregate.input';
import { WorkshopJobCategoryAvgOrderByAggregateInput } from './workshop-job-category-avg-order-by-aggregate.input';
import { WorkshopJobCategoryMaxOrderByAggregateInput } from './workshop-job-category-max-order-by-aggregate.input';
import { WorkshopJobCategoryMinOrderByAggregateInput } from './workshop-job-category-min-order-by-aggregate.input';
import { WorkshopJobCategorySumOrderByAggregateInput } from './workshop-job-category-sum-order-by-aggregate.input';

@InputType()
export class WorkshopJobCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => WorkshopJobCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: WorkshopJobCategoryCountOrderByAggregateInput;

    @Field(() => WorkshopJobCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: WorkshopJobCategoryAvgOrderByAggregateInput;

    @Field(() => WorkshopJobCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: WorkshopJobCategoryMaxOrderByAggregateInput;

    @Field(() => WorkshopJobCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: WorkshopJobCategoryMinOrderByAggregateInput;

    @Field(() => WorkshopJobCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: WorkshopJobCategorySumOrderByAggregateInput;
}
