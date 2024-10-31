import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { WorkshopsDetailsStatus } from '../prisma/workshops-details-status.enum';
import { WorkshopDetailsCountAggregate } from './workshop-details-count-aggregate.output';
import { WorkshopDetailsAvgAggregate } from './workshop-details-avg-aggregate.output';
import { WorkshopDetailsSumAggregate } from './workshop-details-sum-aggregate.output';
import { WorkshopDetailsMinAggregate } from './workshop-details-min-aggregate.output';
import { WorkshopDetailsMaxAggregate } from './workshop-details-max-aggregate.output';

@ObjectType()
export class WorkshopDetailsGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:false})
    rating!: Decimal;

    @Field(() => String, {nullable:false})
    workshopName!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    telephoneNumber?: string;

    @Field(() => String, {nullable:true})
    logoURL?: string;

    @Field(() => WorkshopsDetailsStatus, {nullable:true})
    status?: keyof typeof WorkshopsDetailsStatus;

    @Field(() => String, {nullable:true})
    NIP?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => WorkshopDetailsCountAggregate, {nullable:true})
    _count?: WorkshopDetailsCountAggregate;

    @Field(() => WorkshopDetailsAvgAggregate, {nullable:true})
    _avg?: WorkshopDetailsAvgAggregate;

    @Field(() => WorkshopDetailsSumAggregate, {nullable:true})
    _sum?: WorkshopDetailsSumAggregate;

    @Field(() => WorkshopDetailsMinAggregate, {nullable:true})
    _min?: WorkshopDetailsMinAggregate;

    @Field(() => WorkshopDetailsMaxAggregate, {nullable:true})
    _max?: WorkshopDetailsMaxAggregate;
}
