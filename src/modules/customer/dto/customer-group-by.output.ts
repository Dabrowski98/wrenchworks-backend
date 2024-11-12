import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { CustomerCountAggregate } from './customer-count-aggregate.output';
import { CustomerAvgAggregate } from './customer-avg-aggregate.output';
import { CustomerSumAggregate } from './customer-sum-aggregate.output';
import { CustomerMinAggregate } from './customer-min-aggregate.output';
import { CustomerMaxAggregate } from './customer-max-aggregate.output';

@ObjectType()
export class CustomerGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    customerId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:false})
    totalDue!: Decimal;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    NIP?: string;

    @Field(() => String, {nullable:true})
    companyName?: string;

    @Field(() => CustomerCountAggregate, {nullable:true})
    _count?: CustomerCountAggregate;

    @Field(() => CustomerAvgAggregate, {nullable:true})
    _avg?: CustomerAvgAggregate;

    @Field(() => CustomerSumAggregate, {nullable:true})
    _sum?: CustomerSumAggregate;

    @Field(() => CustomerMinAggregate, {nullable:true})
    _min?: CustomerMinAggregate;

    @Field(() => CustomerMaxAggregate, {nullable:true})
    _max?: CustomerMaxAggregate;
}
