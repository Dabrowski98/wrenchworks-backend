import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopDetailsWhereInput } from './workshop-details-where.input';
import { Type } from 'class-transformer';
import { WorkshopDetailsOrderByWithRelationInput } from './workshop-details-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WorkshopDetailsWhereUniqueInput } from './workshop-details-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkshopDetailsCountAggregateInput } from './workshop-details-count-aggregate.input';
import { WorkshopDetailsAvgAggregateInput } from './workshop-details-avg-aggregate.input';
import { WorkshopDetailsSumAggregateInput } from './workshop-details-sum-aggregate.input';
import { WorkshopDetailsMinAggregateInput } from './workshop-details-min-aggregate.input';
import { WorkshopDetailsMaxAggregateInput } from './workshop-details-max-aggregate.input';

@ArgsType()
export class WorkshopDetailsAggregateArgs {

    @Field(() => WorkshopDetailsWhereInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    where?: WorkshopDetailsWhereInput;

    @Field(() => [WorkshopDetailsOrderByWithRelationInput], {nullable:true})
    @Type(() => WorkshopDetailsOrderByWithRelationInput)
    orderBy?: Array<WorkshopDetailsOrderByWithRelationInput>;

    @Field(() => WorkshopDetailsWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereUniqueInput)
    cursor?: Prisma.AtLeast<WorkshopDetailsWhereUniqueInput, 'workshopId'>;

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
