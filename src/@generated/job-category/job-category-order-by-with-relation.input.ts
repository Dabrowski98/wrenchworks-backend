import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { JobCategoryOrderByRelationAggregateInput } from './job-category-order-by-relation-aggregate.input';
import { JobOrderByRelationAggregateInput } from '../job/job-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryOrderByRelationAggregateInput } from '../workshop-job-category/workshop-job-category-order-by-relation-aggregate.input';

@InputType()
export class JobCategoryOrderByWithRelationInput {

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

    @Field(() => JobCategoryOrderByWithRelationInput, {nullable:true})
    child?: JobCategoryOrderByWithRelationInput;

    @Field(() => JobCategoryOrderByRelationAggregateInput, {nullable:true})
    children?: JobCategoryOrderByRelationAggregateInput;

    @Field(() => JobOrderByRelationAggregateInput, {nullable:true})
    @Type(() => JobOrderByRelationAggregateInput)
    jobs?: JobOrderByRelationAggregateInput;

    @Field(() => WorkshopJobCategoryOrderByRelationAggregateInput, {nullable:true})
    jobCategoryWorkshops?: WorkshopJobCategoryOrderByRelationAggregateInput;
}