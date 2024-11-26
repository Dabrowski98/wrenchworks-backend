import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { ReviewsStatus } from '../../prisma/dto/reviews-status.enum';
import { User } from '../../user/dto/user.model';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';
import { ReviewResponse } from '../../review-response/dto/review-response.model';
import { ReviewCount } from './review-count.output';

@ObjectType()
export class Review {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reviewId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    /**
     * Note: Optional because field defaults to 0.00
     */
    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0,description:'Note: Optional because field defaults to 0.00'})
    rating!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    originalRating!: Decimal | null;

    @Field(() => String, {nullable:false})
    reviewText!: string;

    @Field(() => String, {nullable:true})
    originalReviewText!: string | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    /**
     * Note: Optional because field defaults to PENDING
     */
    @Field(() => ReviewsStatus, {nullable:false,defaultValue:'PENDING',description:'Note: Optional because field defaults to PENDING'})
    status!: keyof typeof ReviewsStatus;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Workshop, {nullable:false})
    @Type(() => Workshop)
    workshop?: Workshop;

    @Field(() => [ReviewResponse], {nullable:true})
    @Type(() => ReviewResponse)
    reviewResponses?: Array<ReviewResponse>;

    @Field(() => ReviewCount, {nullable:false})
    _count?: ReviewCount;
}
