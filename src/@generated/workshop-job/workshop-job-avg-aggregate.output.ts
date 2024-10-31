import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class WorkshopJobAvgAggregate {

    @Field(() => Float, {nullable:true})
    workshopJobId?: number;

    @Field(() => Float, {nullable:true})
    workshopId?: number;

    @Field(() => Float, {nullable:true})
    jobId?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    minPrice?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    maxPrice?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;
}
