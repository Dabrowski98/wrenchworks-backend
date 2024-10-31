import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressPersonWhereInput } from './address-person-where.input';
import { Type } from 'class-transformer';
import { AddressPersonOrderByWithAggregationInput } from './address-person-order-by-with-aggregation.input';
import { AddressPersonScalarFieldEnum } from './address-person-scalar-field.enum';
import { AddressPersonScalarWhereWithAggregatesInput } from './address-person-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AddressPersonCountAggregateInput } from './address-person-count-aggregate.input';
import { AddressPersonAvgAggregateInput } from './address-person-avg-aggregate.input';
import { AddressPersonSumAggregateInput } from './address-person-sum-aggregate.input';
import { AddressPersonMinAggregateInput } from './address-person-min-aggregate.input';
import { AddressPersonMaxAggregateInput } from './address-person-max-aggregate.input';

@ArgsType()
export class AddressPersonGroupByArgs {

    @Field(() => AddressPersonWhereInput, {nullable:true})
    @Type(() => AddressPersonWhereInput)
    where?: AddressPersonWhereInput;

    @Field(() => [AddressPersonOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AddressPersonOrderByWithAggregationInput>;

    @Field(() => [AddressPersonScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AddressPersonScalarFieldEnum>;

    @Field(() => AddressPersonScalarWhereWithAggregatesInput, {nullable:true})
    having?: AddressPersonScalarWhereWithAggregatesInput;

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
