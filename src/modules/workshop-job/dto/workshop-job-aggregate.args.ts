import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WorkshopJobWhereInput } from './workshop-job-where.input';
import { Type } from 'class-transformer';
import { WorkshopJobOrderByWithRelationInput } from './workshop-job-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WorkshopJobWhereUniqueInput } from './workshop-job-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WorkshopJobCountAggregateInput } from './workshop-job-count-aggregate.input';
import { WorkshopJobAvgAggregateInput } from './workshop-job-avg-aggregate.input';
import { WorkshopJobSumAggregateInput } from './workshop-job-sum-aggregate.input';
import { WorkshopJobMinAggregateInput } from './workshop-job-min-aggregate.input';
import { WorkshopJobMaxAggregateInput } from './workshop-job-max-aggregate.input';

@ArgsType()
export class WorkshopJobAggregateArgs {

    @Field(() => WorkshopJobWhereInput, {nullable:true})
    @Type(() => WorkshopJobWhereInput)
    where?: WorkshopJobWhereInput;

    @Field(() => [WorkshopJobOrderByWithRelationInput], {nullable:true})
    @Type(() => WorkshopJobOrderByWithRelationInput)
    orderBy?: Array<WorkshopJobOrderByWithRelationInput>;

    @Field(() => WorkshopJobWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopJobWhereUniqueInput)
    cursor?: Prisma.AtLeast<WorkshopJobWhereUniqueInput, 'workshopJobId' | 'workshopId_jobId'>;

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
