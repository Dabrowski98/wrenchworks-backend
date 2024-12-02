import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionDataWhereInput } from './session-data-where.input';
import { Type } from 'class-transformer';
import { SessionDataOrderByWithAggregationInput } from './session-data-order-by-with-aggregation.input';
import { SessionDataScalarFieldEnum } from './session-data-scalar-field.enum';
import { SessionDataScalarWhereWithAggregatesInput } from './session-data-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SessionDataCountAggregateInput } from './session-data-count-aggregate.input';
import { SessionDataAvgAggregateInput } from './session-data-avg-aggregate.input';
import { SessionDataSumAggregateInput } from './session-data-sum-aggregate.input';
import { SessionDataMinAggregateInput } from './session-data-min-aggregate.input';
import { SessionDataMaxAggregateInput } from './session-data-max-aggregate.input';

@ArgsType()
export class SessionDataGroupByArgs {

    @Field(() => SessionDataWhereInput, {nullable:true})
    @Type(() => SessionDataWhereInput)
    where?: SessionDataWhereInput;

    @Field(() => [SessionDataOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SessionDataOrderByWithAggregationInput>;

    @Field(() => [SessionDataScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SessionDataScalarFieldEnum>;

    @Field(() => SessionDataScalarWhereWithAggregatesInput, {nullable:true})
    having?: SessionDataScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SessionDataCountAggregateInput, {nullable:true})
    _count?: SessionDataCountAggregateInput;

    @Field(() => SessionDataAvgAggregateInput, {nullable:true})
    _avg?: SessionDataAvgAggregateInput;

    @Field(() => SessionDataSumAggregateInput, {nullable:true})
    _sum?: SessionDataSumAggregateInput;

    @Field(() => SessionDataMinAggregateInput, {nullable:true})
    _min?: SessionDataMinAggregateInput;

    @Field(() => SessionDataMaxAggregateInput, {nullable:true})
    _max?: SessionDataMaxAggregateInput;
}
