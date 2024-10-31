import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressPersonWhereInput } from './address-person-where.input';
import { Type } from 'class-transformer';
import { AddressPersonOrderByWithRelationInput } from './address-person-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AddressPersonWhereUniqueInput } from './address-person-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AddressPersonCountAggregateInput } from './address-person-count-aggregate.input';
import { AddressPersonAvgAggregateInput } from './address-person-avg-aggregate.input';
import { AddressPersonSumAggregateInput } from './address-person-sum-aggregate.input';
import { AddressPersonMinAggregateInput } from './address-person-min-aggregate.input';
import { AddressPersonMaxAggregateInput } from './address-person-max-aggregate.input';

@ArgsType()
export class AddressPersonAggregateArgs {

    @Field(() => AddressPersonWhereInput, {nullable:true})
    @Type(() => AddressPersonWhereInput)
    where?: AddressPersonWhereInput;

    @Field(() => [AddressPersonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AddressPersonOrderByWithRelationInput>;

    @Field(() => AddressPersonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AddressPersonWhereUniqueInput, 'addressId_personId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AddressPersonCountAggregateInput, {nullable:true})
    _count?: AddressPersonCountAggregateInput;

    @Field(() => AddressPersonAvgAggregateInput, {nullable:true})
    _avg?: AddressPersonAvgAggregateInput;

    @Field(() => AddressPersonSumAggregateInput, {nullable:true})
    _sum?: AddressPersonSumAggregateInput;

    @Field(() => AddressPersonMinAggregateInput, {nullable:true})
    _min?: AddressPersonMinAggregateInput;

    @Field(() => AddressPersonMaxAggregateInput, {nullable:true})
    _max?: AddressPersonMaxAggregateInput;
}
