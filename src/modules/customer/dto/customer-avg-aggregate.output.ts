import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class CustomerAvgAggregate {

    @Field(() => Float, {nullable:true})
    customerId?: number;

    @Field(() => Float, {nullable:true})
    workshopId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    guestId?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    totalDue?: Decimal;

    @Field(() => Float, {nullable:true})
    createdBy?: number;

    @Field(() => Float, {nullable:true})
    updatedBy?: number;
}
