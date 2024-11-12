import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';
import { Type } from 'class-transformer';
import { CustomerOrderByWithRelationInput } from './customer-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CustomerCountAggregateInput } from './customer-count-aggregate.input';
import { CustomerAvgAggregateInput } from './customer-avg-aggregate.input';
import { CustomerSumAggregateInput } from './customer-sum-aggregate.input';
import { CustomerMinAggregateInput } from './customer-min-aggregate.input';
import { CustomerMaxAggregateInput } from './customer-max-aggregate.input';

@ArgsType()
export class CustomerAggregateArgs {

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;

    @Field(() => [CustomerOrderByWithRelationInput], {nullable:true})
    @Type(() => CustomerOrderByWithRelationInput)
    orderBy?: Array<CustomerOrderByWithRelationInput>;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    cursor?: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId_workshopId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CustomerCountAggregateInput, {nullable:true})
    @Type(() => CustomerCountAggregateInput)
    _count?: CustomerCountAggregateInput;

    @Field(() => CustomerAvgAggregateInput, {nullable:true})
    @Type(() => CustomerAvgAggregateInput)
    _avg?: CustomerAvgAggregateInput;

    @Field(() => CustomerSumAggregateInput, {nullable:true})
    @Type(() => CustomerSumAggregateInput)
    _sum?: CustomerSumAggregateInput;

    @Field(() => CustomerMinAggregateInput, {nullable:true})
    @Type(() => CustomerMinAggregateInput)
    _min?: CustomerMinAggregateInput;

    @Field(() => CustomerMaxAggregateInput, {nullable:true})
    @Type(() => CustomerMaxAggregateInput)
    _max?: CustomerMaxAggregateInput;
}
