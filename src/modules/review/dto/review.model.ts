import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { ReviewStatus } from '../../prisma/dto/review-status.enum';
import { User } from '../../user/dto/user.model';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';
import { ReviewResponse } from '../../review-response/dto/review-response.model';
import { ReviewCount } from './review-count.output';

/**
 * The Review model captures customer reviews including ratings and textual feedback for workshops and services.
 * It maintains information about review status, original review modifications, and user associations.
 */
@ObjectType({description:'The Review model captures customer reviews including ratings and textual feedback for workshops and services.\nIt maintains information about review status, original review modifications, and user associations.'})
export class Review {

    /**
     * Identifier of the review
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the review'})
    reviewId!: bigint;

    /**
     * Identifier of the user who wrote the review
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the user who wrote the review'})
    userId!: bigint;

    /**
     * Identifier of the workshop being reviewed
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the workshop being reviewed'})
    workshopId!: bigint;

    /**
     * Rating score given in the review
     * Note: Optional because field defaults to 0.00
     */
    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0,description:'Rating score given in the review\nNote: Optional because field defaults to 0.00'})
    rating!: Decimal;

    /**
     * Original rating before any modifications
     */
    @Field(() => GraphQLDecimal, {nullable:true,description:'Original rating before any modifications'})
    originalRating!: Decimal | null;

    /**
     * Text content of the review
     */
    @Field(() => String, {nullable:false,description:'Text content of the review'})
    reviewText!: string;

    /**
     * Original review text before any modifications
     */
    @Field(() => String, {nullable:true,description:'Original review text before any modifications'})
    originalReviewText!: string | null;

    /**
     * Timestamp of creation
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of creation'})
    createdAt!: Date;

    /**
     * Timestamp of last update
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of last update'})
    updatedAt!: Date | null;

    /**
     * Current status of the review
     * Note: Optional because field defaults to PENDING
     */
    @Field(() => ReviewStatus, {nullable:false,defaultValue:'PENDING',description:'Current status of the review\nNote: Optional because field defaults to PENDING'})
    status!: keyof typeof ReviewStatus;

    /**
     * User who wrote the review
     */
    @Field(() => User, {nullable:false,description:'User who wrote the review'})
    user?: User;

    /**
     * Workshop being reviewed
     */
    @Field(() => Workshop, {nullable:false,description:'Workshop being reviewed'})
    @Type(() => Workshop)
    workshop?: Workshop;

    /**
     * Responses to this review
     */
    @Field(() => [ReviewResponse], {nullable:true,description:'Responses to this review'})
    @Type(() => ReviewResponse)
    reviewResponses?: Array<ReviewResponse>;

    @Field(() => ReviewCount, {nullable:false})
    _count?: ReviewCount;
}
