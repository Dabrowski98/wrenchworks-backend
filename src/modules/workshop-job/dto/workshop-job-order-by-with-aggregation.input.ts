import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/dto/sort-order.enum';
import { SortOrderInput } from '../../prisma/dto/sort-order.input';
import { Type } from 'class-transformer';
import { HideField } from '@nestjs/graphql';
import { WorkshopJobCountOrderByAggregateInput } from './workshop-job-count-order-by-aggregate.input';
import { WorkshopJobAvgOrderByAggregateInput } from './workshop-job-avg-order-by-aggregate.input';
import { WorkshopJobMaxOrderByAggregateInput } from './workshop-job-max-order-by-aggregate.input';
import { WorkshopJobMinOrderByAggregateInput } from './workshop-job-min-order-by-aggregate.input';
import { WorkshopJobSumOrderByAggregateInput } from './workshop-job-sum-order-by-aggregate.input';

@InputType()
export class WorkshopJobOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    workshopJobId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workshopId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jobId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    workshopJobDescription?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    minPrice?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    maxPrice?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    availability?: keyof typeof SortOrder;

    @Field(() => WorkshopJobCountOrderByAggregateInput, {nullable:true})
    @Type(() => WorkshopJobCountOrderByAggregateInput)
    _count?: WorkshopJobCountOrderByAggregateInput;

    @Field(() => WorkshopJobAvgOrderByAggregateInput, {nullable:true})
    @Type(() => WorkshopJobAvgOrderByAggregateInput)
    _avg?: WorkshopJobAvgOrderByAggregateInput;

    @Field(() => WorkshopJobMaxOrderByAggregateInput, {nullable:true})
    @Type(() => WorkshopJobMaxOrderByAggregateInput)
    _max?: WorkshopJobMaxOrderByAggregateInput;

    @Field(() => WorkshopJobMinOrderByAggregateInput, {nullable:true})
    @Type(() => WorkshopJobMinOrderByAggregateInput)
    _min?: WorkshopJobMinOrderByAggregateInput;

    @Field(() => WorkshopJobSumOrderByAggregateInput, {nullable:true})
    @Type(() => WorkshopJobSumOrderByAggregateInput)
    _sum?: WorkshopJobSumOrderByAggregateInput;
}