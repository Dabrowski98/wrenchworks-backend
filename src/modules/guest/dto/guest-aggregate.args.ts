import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GuestWhereInput } from './guest-where.input';
import { Type } from 'class-transformer';
import { GuestOrderByWithRelationInput } from './guest-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GuestCountAggregateInput } from './guest-count-aggregate.input';
import { GuestAvgAggregateInput } from './guest-avg-aggregate.input';
import { GuestSumAggregateInput } from './guest-sum-aggregate.input';
import { GuestMinAggregateInput } from './guest-min-aggregate.input';
import { GuestMaxAggregateInput } from './guest-max-aggregate.input';

@ArgsType()
export class GuestAggregateArgs {

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    where?: GuestWhereInput;

    @Field(() => [GuestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GuestOrderByWithRelationInput>;

    @Field(() => GuestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GuestCountAggregateInput, {nullable:true})
    _count?: GuestCountAggregateInput;

    @Field(() => GuestAvgAggregateInput, {nullable:true})
    _avg?: GuestAvgAggregateInput;

    @Field(() => GuestSumAggregateInput, {nullable:true})
    _sum?: GuestSumAggregateInput;

    @Field(() => GuestMinAggregateInput, {nullable:true})
    _min?: GuestMinAggregateInput;

    @Field(() => GuestMaxAggregateInput, {nullable:true})
    _max?: GuestMaxAggregateInput;
}
