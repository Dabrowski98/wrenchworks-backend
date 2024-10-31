import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ReviewsStatus } from '../prisma/reviews-status.enum';

@ObjectType()
export class ReviewMinAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:true})
    rating?: Decimal;

    @Field(() => String, {nullable:true})
    reviewText?: string;

    @Field(() => Date, {nullable:true})
    reviewDate?: Date | string;

    @Field(() => ReviewsStatus, {nullable:true})
    status?: keyof typeof ReviewsStatus;
}
