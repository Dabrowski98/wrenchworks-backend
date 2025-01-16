import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { WorkshopDetailsStatus } from '../../prisma/dto/workshop-details-status.enum';

@ObjectType()
export class WorkshopDetailsMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:true})
    rating?: Decimal;

    @Field(() => String, {nullable:true})
    workshopName?: string;

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

    @Field(() => String, {nullable:true})
    updatedBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
