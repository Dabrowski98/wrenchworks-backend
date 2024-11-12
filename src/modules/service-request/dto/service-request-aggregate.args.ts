import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceRequestWhereInput } from './service-request-where.input';
import { Type } from 'class-transformer';
import { ServiceRequestOrderByWithRelationInput } from './service-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ServiceRequestWhereUniqueInput } from './service-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ServiceRequestCountAggregateInput } from './service-request-count-aggregate.input';
import { ServiceRequestAvgAggregateInput } from './service-request-avg-aggregate.input';
import { ServiceRequestSumAggregateInput } from './service-request-sum-aggregate.input';
import { ServiceRequestMinAggregateInput } from './service-request-min-aggregate.input';
import { ServiceRequestMaxAggregateInput } from './service-request-max-aggregate.input';

@ArgsType()
export class ServiceRequestAggregateArgs {

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    where?: ServiceRequestWhereInput;

    @Field(() => [ServiceRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ServiceRequestOrderByWithRelationInput>;

    @Field(() => ServiceRequestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ServiceRequestWhereUniqueInput, 'serviceRequestId' | 'approvedServiceId'>;

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
