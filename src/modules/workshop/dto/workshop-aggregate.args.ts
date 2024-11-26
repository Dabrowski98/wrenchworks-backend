import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopWhereInput } from './workshop-where.input';
import { Type } from 'class-transformer';
import { WorkshopOrderByWithRelationInput } from './workshop-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkshopCountAggregateInput } from './workshop-count-aggregate.input';
import { WorkshopAvgAggregateInput } from './workshop-avg-aggregate.input';
import { WorkshopSumAggregateInput } from './workshop-sum-aggregate.input';
import { WorkshopMinAggregateInput } from './workshop-min-aggregate.input';
import { WorkshopMaxAggregateInput } from './workshop-max-aggregate.input';

@ArgsType()
export class WorkshopAggregateArgs {

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    where?: WorkshopWhereInput;

    @Field(() => [WorkshopOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WorkshopOrderByWithRelationInput>;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WorkshopCountAggregateInput, {nullable:true})
    _count?: WorkshopCountAggregateInput;

    @Field(() => WorkshopAvgAggregateInput, {nullable:true})
    _avg?: WorkshopAvgAggregateInput;

    @Field(() => WorkshopSumAggregateInput, {nullable:true})
    _sum?: WorkshopSumAggregateInput;

    @Field(() => WorkshopMinAggregateInput, {nullable:true})
    _min?: WorkshopMinAggregateInput;

    @Field(() => WorkshopMaxAggregateInput, {nullable:true})
    _max?: WorkshopMaxAggregateInput;
}
