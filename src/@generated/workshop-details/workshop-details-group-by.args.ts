import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDetailsWhereInput } from './workshop-details-where.input';
import { Type } from 'class-transformer';
import { WorkshopDetailsOrderByWithAggregationInput } from './workshop-details-order-by-with-aggregation.input';
import { WorkshopDetailsScalarFieldEnum } from './workshop-details-scalar-field.enum';
import { WorkshopDetailsScalarWhereWithAggregatesInput } from './workshop-details-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WorkshopDetailsCountAggregateInput } from './workshop-details-count-aggregate.input';
import { WorkshopDetailsAvgAggregateInput } from './workshop-details-avg-aggregate.input';
import { WorkshopDetailsSumAggregateInput } from './workshop-details-sum-aggregate.input';
import { WorkshopDetailsMinAggregateInput } from './workshop-details-min-aggregate.input';
import { WorkshopDetailsMaxAggregateInput } from './workshop-details-max-aggregate.input';

@ArgsType()
export class WorkshopDetailsGroupByArgs {

    @Field(() => WorkshopDetailsWhereInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    where?: WorkshopDetailsWhereInput;

    @Field(() => [WorkshopDetailsOrderByWithAggregationInput], {nullable:true})
    @Type(() => WorkshopDetailsOrderByWithAggregationInput)
    orderBy?: Array<WorkshopDetailsOrderByWithAggregationInput>;

    @Field(() => [WorkshopDetailsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WorkshopDetailsScalarFieldEnum>;

    @Field(() => WorkshopDetailsScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => WorkshopDetailsScalarWhereWithAggregatesInput)
    having?: WorkshopDetailsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WorkshopDetailsCountAggregateInput, {nullable:true})
    @Type(() => WorkshopDetailsCountAggregateInput)
    _count?: WorkshopDetailsCountAggregateInput;

    @Field(() => WorkshopDetailsAvgAggregateInput, {nullable:true})
    @Type(() => WorkshopDetailsAvgAggregateInput)
    _avg?: WorkshopDetailsAvgAggregateInput;

    @Field(() => WorkshopDetailsSumAggregateInput, {nullable:true})
    @Type(() => WorkshopDetailsSumAggregateInput)
    _sum?: WorkshopDetailsSumAggregateInput;

    @Field(() => WorkshopDetailsMinAggregateInput, {nullable:true})
    @Type(() => WorkshopDetailsMinAggregateInput)
    _min?: WorkshopDetailsMinAggregateInput;

    @Field(() => WorkshopDetailsMaxAggregateInput, {nullable:true})
    @Type(() => WorkshopDetailsMaxAggregateInput)
    _max?: WorkshopDetailsMaxAggregateInput;
}
