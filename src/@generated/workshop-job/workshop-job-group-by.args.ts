import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobWhereInput } from './workshop-job-where.input';
import { Type } from 'class-transformer';
import { WorkshopJobOrderByWithAggregationInput } from './workshop-job-order-by-with-aggregation.input';
import { WorkshopJobScalarFieldEnum } from './workshop-job-scalar-field.enum';
import { WorkshopJobScalarWhereWithAggregatesInput } from './workshop-job-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WorkshopJobCountAggregateInput } from './workshop-job-count-aggregate.input';
import { WorkshopJobAvgAggregateInput } from './workshop-job-avg-aggregate.input';
import { WorkshopJobSumAggregateInput } from './workshop-job-sum-aggregate.input';
import { WorkshopJobMinAggregateInput } from './workshop-job-min-aggregate.input';
import { WorkshopJobMaxAggregateInput } from './workshop-job-max-aggregate.input';

@ArgsType()
export class WorkshopJobGroupByArgs {

    @Field(() => WorkshopJobWhereInput, {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    where?: WorkshopJobWhereInput;

    @Field(() => [WorkshopJobOrderByWithAggregationInput], {nullable:true})
    @Type(() => WorkshopJobOrderByWithAggregationInput)
    orderBy?: Array<WorkshopJobOrderByWithAggregationInput>;

    @Field(() => [WorkshopJobScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WorkshopJobScalarFieldEnum>;

    @Field(() => WorkshopJobScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => WorkshopJobScalarWhereWithAggregatesInput)
    having?: WorkshopJobScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WorkshopJobCountAggregateInput, {nullable:true})
    @Type(() => WorkshopJobCountAggregateInput)
    _count?: WorkshopJobCountAggregateInput;

    @Field(() => WorkshopJobAvgAggregateInput, {nullable:true})
    @Type(() => WorkshopJobAvgAggregateInput)
    _avg?: WorkshopJobAvgAggregateInput;

    @Field(() => WorkshopJobSumAggregateInput, {nullable:true})
    @Type(() => WorkshopJobSumAggregateInput)
    _sum?: WorkshopJobSumAggregateInput;

    @Field(() => WorkshopJobMinAggregateInput, {nullable:true})
    @Type(() => WorkshopJobMinAggregateInput)
    _min?: WorkshopJobMinAggregateInput;

    @Field(() => WorkshopJobMaxAggregateInput, {nullable:true})
    @Type(() => WorkshopJobMaxAggregateInput)
    _max?: WorkshopJobMaxAggregateInput;
}
