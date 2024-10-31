import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobCategoryWhereInput } from './workshop-job-category-where.input';
import { Type } from 'class-transformer';
import { WorkshopJobCategoryOrderByWithAggregationInput } from './workshop-job-category-order-by-with-aggregation.input';
import { WorkshopJobCategoryScalarFieldEnum } from './workshop-job-category-scalar-field.enum';
import { WorkshopJobCategoryScalarWhereWithAggregatesInput } from './workshop-job-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WorkshopJobCategoryCountAggregateInput } from './workshop-job-category-count-aggregate.input';
import { WorkshopJobCategoryAvgAggregateInput } from './workshop-job-category-avg-aggregate.input';
import { WorkshopJobCategorySumAggregateInput } from './workshop-job-category-sum-aggregate.input';
import { WorkshopJobCategoryMinAggregateInput } from './workshop-job-category-min-aggregate.input';
import { WorkshopJobCategoryMaxAggregateInput } from './workshop-job-category-max-aggregate.input';

@ArgsType()
export class WorkshopJobCategoryGroupByArgs {

    @Field(() => WorkshopJobCategoryWhereInput, {nullable:true})
    @Type(() => WorkshopJobCategoryWhereInput)
    where?: WorkshopJobCategoryWhereInput;

    @Field(() => [WorkshopJobCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WorkshopJobCategoryOrderByWithAggregationInput>;

    @Field(() => [WorkshopJobCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WorkshopJobCategoryScalarFieldEnum>;

    @Field(() => WorkshopJobCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: WorkshopJobCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WorkshopJobCategoryCountAggregateInput, {nullable:true})
    _count?: WorkshopJobCategoryCountAggregateInput;

    @Field(() => WorkshopJobCategoryAvgAggregateInput, {nullable:true})
    _avg?: WorkshopJobCategoryAvgAggregateInput;

    @Field(() => WorkshopJobCategorySumAggregateInput, {nullable:true})
    _sum?: WorkshopJobCategorySumAggregateInput;

    @Field(() => WorkshopJobCategoryMinAggregateInput, {nullable:true})
    _min?: WorkshopJobCategoryMinAggregateInput;

    @Field(() => WorkshopJobCategoryMaxAggregateInput, {nullable:true})
    _max?: WorkshopJobCategoryMaxAggregateInput;
}
