import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestWhereInput } from './service-request-where.input';
import { Type } from 'class-transformer';
import { ServiceRequestOrderByWithAggregationInput } from './service-request-order-by-with-aggregation.input';
import { ServiceRequestScalarFieldEnum } from './service-request-scalar-field.enum';
import { ServiceRequestScalarWhereWithAggregatesInput } from './service-request-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ServiceRequestCountAggregateInput } from './service-request-count-aggregate.input';
import { ServiceRequestAvgAggregateInput } from './service-request-avg-aggregate.input';
import { ServiceRequestSumAggregateInput } from './service-request-sum-aggregate.input';
import { ServiceRequestMinAggregateInput } from './service-request-min-aggregate.input';
import { ServiceRequestMaxAggregateInput } from './service-request-max-aggregate.input';

@ArgsType()
export class ServiceRequestGroupByArgs {

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    where?: ServiceRequestWhereInput;

    @Field(() => [ServiceRequestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ServiceRequestOrderByWithAggregationInput>;

    @Field(() => [ServiceRequestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ServiceRequestScalarFieldEnum>;

    @Field(() => ServiceRequestScalarWhereWithAggregatesInput, {nullable:true})
    having?: ServiceRequestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ServiceRequestCountAggregateInput, {nullable:true})
    _count?: ServiceRequestCountAggregateInput;

    @Field(() => ServiceRequestAvgAggregateInput, {nullable:true})
    _avg?: ServiceRequestAvgAggregateInput;

    @Field(() => ServiceRequestSumAggregateInput, {nullable:true})
    _sum?: ServiceRequestSumAggregateInput;

    @Field(() => ServiceRequestMinAggregateInput, {nullable:true})
    _min?: ServiceRequestMinAggregateInput;

    @Field(() => ServiceRequestMaxAggregateInput, {nullable:true})
    _max?: ServiceRequestMaxAggregateInput;
}
