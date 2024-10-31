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

    @Field(() => GraphQLDecimal, {nullable:true})
    totalDue?: Decimal;
}
