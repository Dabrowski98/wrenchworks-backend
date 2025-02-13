import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ReviewResponseStatus } from '../../prisma/dto/review-response-status.enum';
import { Review } from '../../review/dto/review.model';
import { Type } from 'class-transformer';
import { User } from '../../user/dto/user.model';
import { ReviewResponseCount } from './review-response-count.output';

/**
 * This model represents a ReviewResponse which contains responses to customer reviews.
 * It allows hierarchical responses and tracks modifications along with review relationships.
 */
@ObjectType({description:'This model represents a ReviewResponse which contains responses to customer reviews.\nIt allows hierarchical responses and tracks modifications along with review relationships.'})
export class ReviewResponse {

    /**
     * Identifier of the review response
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the review response'})
    reviewResponseId!: bigint;

    /**
     * Identifier of the review being responded to
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the review being responded to'})
    reviewId!: bigint;

    /**
     * Identifier of the user writing the response
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the user writing the response'})
    userId!: bigint;

    /**
     * Identifier of the parent response
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of the parent response'})
    parentResponseId!: bigint | null;

    /**
     * Text content of the response
     */
    @Field(() => String, {nullable:false,description:'Text content of the response'})
    responseText!: string;

    /**
     * Original response text before modifications
     */
    @Field(() => String, {nullable:true,description:'Original response text before modifications'})
    originalResponseText!: string | null;

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
     * Current status of the response
     * Note: Optional because field defaults to pending
     */
    @Field(() => ReviewResponseStatus, {nullable:false,defaultValue:'PENDING',description:'Current status of the response\nNote: Optional because field defaults to pending'})
    status!: keyof typeof ReviewResponseStatus;

    /**
     * Parent response this response replies to
     */
    @Field(() => ReviewResponse, {nullable:true,description:'Parent response this response replies to'})
    parentResponse?: ReviewResponse | null;

    /**
     * Child responses to this response
     */
    @Field(() => [ReviewResponse], {nullable:true,description:'Child responses to this response'})
    childrenResponses?: Array<ReviewResponse>;

    /**
     * Review this response belongs to
     */
    @Field(() => Review, {nullable:false,description:'Review this response belongs to'})
    @Type(() => Review)
    review?: Review;

    /**
     * User who wrote the response
     */
    @Field(() => User, {nullable:false,description:'User who wrote the response'})
    user?: User;

    @Field(() => ReviewResponseCount, {nullable:false})
    _count?: ReviewResponseCount;
}
