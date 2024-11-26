import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JoinWorkshopRequestWhereInput } from './join-workshop-request-where.input';
import { Type } from 'class-transformer';
import { JoinWorkshopRequestOrderByWithAggregationInput } from './join-workshop-request-order-by-with-aggregation.input';
import { JoinWorkshopRequestScalarFieldEnum } from './join-workshop-request-scalar-field.enum';
import { JoinWorkshopRequestScalarWhereWithAggregatesInput } from './join-workshop-request-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { JoinWorkshopRequestCountAggregateInput } from './join-workshop-request-count-aggregate.input';
import { JoinWorkshopRequestAvgAggregateInput } from './join-workshop-request-avg-aggregate.input';
import { JoinWorkshopRequestSumAggregateInput } from './join-workshop-request-sum-aggregate.input';
import { JoinWorkshopRequestMinAggregateInput } from './join-workshop-request-min-aggregate.input';
import { JoinWorkshopRequestMaxAggregateInput } from './join-workshop-request-max-aggregate.input';

@ArgsType()
export class JoinWorkshopRequestGroupByArgs {

    @Field(() => JoinWorkshopRequestWhereInput, {nullable:true})
    @Type(() => JoinWorkshopRequestWhereInput)
    where?: JoinWorkshopRequestWhereInput;

    @Field(() => [JoinWorkshopRequestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<JoinWorkshopRequestOrderByWithAggregationInput>;

    @Field(() => [JoinWorkshopRequestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof JoinWorkshopRequestScalarFieldEnum>;

    @Field(() => JoinWorkshopRequestScalarWhereWithAggregatesInput, {nullable:true})
    having?: JoinWorkshopRequestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => JoinWorkshopRequestCountAggregateInput, {nullable:true})
    _count?: JoinWorkshopRequestCountAggregateInput;

    @Field(() => JoinWorkshopRequestAvgAggregateInput, {nullable:true})
    _avg?: JoinWorkshopRequestAvgAggregateInput;

    @Field(() => JoinWorkshopRequestSumAggregateInput, {nullable:true})
    _sum?: JoinWorkshopRequestSumAggregateInput;

    @Field(() => JoinWorkshopRequestMinAggregateInput, {nullable:true})
    _min?: JoinWorkshopRequestMinAggregateInput;

    @Field(() => JoinWorkshopRequestMaxAggregateInput, {nullable:true})
    _max?: JoinWorkshopRequestMaxAggregateInput;
}
