import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWorkshopWhereInput } from './address-workshop-where.input';
import { Type } from 'class-transformer';
import { AddressWorkshopOrderByWithRelationInput } from './address-workshop-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AddressWorkshopWhereUniqueInput } from './address-workshop-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AddressWorkshopCountAggregateInput } from './address-workshop-count-aggregate.input';
import { AddressWorkshopAvgAggregateInput } from './address-workshop-avg-aggregate.input';
import { AddressWorkshopSumAggregateInput } from './address-workshop-sum-aggregate.input';
import { AddressWorkshopMinAggregateInput } from './address-workshop-min-aggregate.input';
import { AddressWorkshopMaxAggregateInput } from './address-workshop-max-aggregate.input';

@ArgsType()
export class AddressWorkshopAggregateArgs {

    @Field(() => AddressWorkshopWhereInput, {nullable:true})
    @Type(() => AddressWorkshopWhereInput)
    where?: AddressWorkshopWhereInput;

    @Field(() => [AddressWorkshopOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AddressWorkshopOrderByWithRelationInput>;

    @Field(() => AddressWorkshopWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AddressWorkshopCountAggregateInput, {nullable:true})
    _count?: AddressWorkshopCountAggregateInput;

    @Field(() => AddressWorkshopAvgAggregateInput, {nullable:true})
    _avg?: AddressWorkshopAvgAggregateInput;

    @Field(() => AddressWorkshopSumAggregateInput, {nullable:true})
    _sum?: AddressWorkshopSumAggregateInput;

    @Field(() => AddressWorkshopMinAggregateInput, {nullable:true})
    _min?: AddressWorkshopMinAggregateInput;

    @Field(() => AddressWorkshopMaxAggregateInput, {nullable:true})
    _max?: AddressWorkshopMaxAggregateInput;
}
