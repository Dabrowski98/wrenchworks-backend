import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ReviewAvgAggregate {

    @Field(() => Float, {nullable:true})
    reviewId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    workshopId?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    rating?: Decimal;
}
