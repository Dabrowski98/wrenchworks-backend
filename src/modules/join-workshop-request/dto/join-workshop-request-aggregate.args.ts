import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JoinWorkshopRequestWhereInput } from './join-workshop-request-where.input';
import { Type } from 'class-transformer';
import { JoinWorkshopRequestOrderByWithRelationInput } from './join-workshop-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { JoinWorkshopRequestCountAggregateInput } from './join-workshop-request-count-aggregate.input';
import { JoinWorkshopRequestAvgAggregateInput } from './join-workshop-request-avg-aggregate.input';
import { JoinWorkshopRequestSumAggregateInput } from './join-workshop-request-sum-aggregate.input';
import { JoinWorkshopRequestMinAggregateInput } from './join-workshop-request-min-aggregate.input';
import { JoinWorkshopRequestMaxAggregateInput } from './join-workshop-request-max-aggregate.input';

@ArgsType()
export class JoinWorkshopRequestAggregateArgs {

    @Field(() => JoinWorkshopRequestWhereInput, {nullable:true})
    @Type(() => JoinWorkshopRequestWhereInput)
    where?: JoinWorkshopRequestWhereInput;

    @Field(() => [JoinWorkshopRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JoinWorkshopRequestOrderByWithRelationInput>;

    @Field(() => JoinWorkshopRequestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>;

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
