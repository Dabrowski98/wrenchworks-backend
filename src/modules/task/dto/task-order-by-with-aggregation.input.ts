import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { HideField } from 'nestjs-graphql';
import { TaskCountOrderByAggregateInput } from './task-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { TaskAvgOrderByAggregateInput } from './task-avg-order-by-aggregate.input';
import { TaskMaxOrderByAggregateInput } from './task-max-order-by-aggregate.input';
import { TaskMinOrderByAggregateInput } from './task-min-order-by-aggregate.input';
import { TaskSumOrderByAggregateInput } from './task-sum-order-by-aggregate.input';

@InputType()
export class TaskOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopJobId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    customName?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    executionTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    partsCost?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    createdBy?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    updatedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    updatedBy?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    resolvedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @HideField()
    resolvedBy?: SortOrderInput;

    @Field(() => TaskCountOrderByAggregateInput, {nullable:true})
    @Type(() => TaskCountOrderByAggregateInput)
    _count?: TaskCountOrderByAggregateInput;

    @Field(() => TaskAvgOrderByAggregateInput, {nullable:true})
    @Type(() => TaskAvgOrderByAggregateInput)
    _avg?: TaskAvgOrderByAggregateInput;

    @Field(() => TaskMaxOrderByAggregateInput, {nullable:true})
    @Type(() => TaskMaxOrderByAggregateInput)
    _max?: TaskMaxOrderByAggregateInput;

    @Field(() => TaskMinOrderByAggregateInput, {nullable:true})
    @Type(() => TaskMinOrderByAggregateInput)
    _min?: TaskMinOrderByAggregateInput;

    @Field(() => TaskSumOrderByAggregateInput, {nullable:true})
    @Type(() => TaskSumOrderByAggregateInput)
    _sum?: TaskSumOrderByAggregateInput;
}
