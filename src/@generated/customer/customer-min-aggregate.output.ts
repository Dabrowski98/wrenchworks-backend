import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class CustomerMinAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    customerId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:true})
    totalDue?: Decimal;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    NIP?: string;

    @Field(() => String, {nullable:true})
    companyName?: string;
}
