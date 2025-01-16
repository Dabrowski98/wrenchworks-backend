import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ReviewStatus } from '../../prisma/dto/review-status.enum';

@ObjectType()
export class ReviewMaxAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reviewId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => GraphQLDecimal, {nullable:true})
    rating?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    originalRating?: Decimal;

    @Field(() => String, {nullable:true})
    reviewText?: string;

    @Field(() => String, {nullable:true})
    originalReviewText?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReviewStatus, {nullable:true})
    status?: keyof typeof ReviewStatus;
}
