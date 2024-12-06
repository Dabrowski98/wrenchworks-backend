import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionDataWhereInput } from './session-data-where.input';
import { Type } from 'class-transformer';
import { SessionDataOrderByWithRelationInput } from './session-data-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SessionDataWhereUniqueInput } from './session-data-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SessionDataCountAggregateInput } from './session-data-count-aggregate.input';
import { SessionDataAvgAggregateInput } from './session-data-avg-aggregate.input';
import { SessionDataSumAggregateInput } from './session-data-sum-aggregate.input';
import { SessionDataMinAggregateInput } from './session-data-min-aggregate.input';
import { SessionDataMaxAggregateInput } from './session-data-max-aggregate.input';

@ArgsType()
export class SessionDataAggregateArgs {

    @Field(() => SessionDataWhereInput, {nullable:true})
    @Type(() => SessionDataWhereInput)
    where?: SessionDataWhereInput;

    @Field(() => [SessionDataOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionDataOrderByWithRelationInput>;

    @Field(() => SessionDataWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SessionDataWhereUniqueInput, 'sessionDataId' | 'userId_deviceId'>;

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
