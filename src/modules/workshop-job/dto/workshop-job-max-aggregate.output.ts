import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class WorkshopJobMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopJobId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    jobId?: bigint | number;

    @Field(() => String, {nullable:true})
    workshopJobDescription?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    minPrice?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    maxPrice?: Decimal;

    @Field(() => Boolean, {nullable:true})
    availability?: boolean;
}
