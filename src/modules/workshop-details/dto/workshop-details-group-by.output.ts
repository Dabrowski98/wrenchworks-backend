import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { WorkshopDetailsStatus } from '../../prisma/dto/workshop-details-status.enum';
import { WorkshopDetailsCountAggregate } from './workshop-details-count-aggregate.output';
import { WorkshopDetailsAvgAggregate } from './workshop-details-avg-aggregate.output';
import { WorkshopDetailsSumAggregate } from './workshop-details-sum-aggregate.output';
import { WorkshopDetailsMinAggregate } from './workshop-details-min-aggregate.output';
import { WorkshopDetailsMaxAggregate } from './workshop-details-max-aggregate.output';

@ObjectType()
export class WorkshopDetailsGroupBy {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:true})
    rating?: Decimal;

    @Field(() => String, {nullable:false})
    workshopName!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    logoURL?: string;

    @Field(() => WorkshopDetailsStatus, {nullable:true})
    status?: keyof typeof WorkshopDetailsStatus;

    @Field(() => String, {nullable:true})
    NIP?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    updatedBy?: bigint | number;

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
