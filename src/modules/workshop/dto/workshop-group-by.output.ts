import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { WorkshopCountAggregate } from './workshop-count-aggregate.output';
import { WorkshopAvgAggregate } from './workshop-avg-aggregate.output';
import { WorkshopSumAggregate } from './workshop-sum-aggregate.output';
import { WorkshopMinAggregate } from './workshop-min-aggregate.output';
import { WorkshopMaxAggregate } from './workshop-max-aggregate.output';

@ObjectType()
export class WorkshopGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    personId!: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    addressId?: bigint | number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;

    @Field(() => Boolean, {nullable:true})
    isManagingWork?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => WorkshopCountAggregate, {nullable:true})
    _count?: WorkshopCountAggregate;

    @Field(() => WorkshopAvgAggregate, {nullable:true})
    _avg?: WorkshopAvgAggregate;

    @Field(() => WorkshopSumAggregate, {nullable:true})
    _sum?: WorkshopSumAggregate;

    @Field(() => WorkshopMinAggregate, {nullable:true})
    _min?: WorkshopMinAggregate;

    @Field(() => WorkshopMaxAggregate, {nullable:true})
    _max?: WorkshopMaxAggregate;
}
