import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ReviewsResponsesStatus } from '../../prisma/dto/reviews-responses-status.enum';
import { Review } from '../../review/dto/review.model';
import { User } from '../../user/dto/user.model';
import { ReviewResponseCount } from './review-response-count.output';

@ObjectType()
export class ReviewResponse {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reviewResponseId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reviewId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    parentResponseId!: bigint | null;

    @Field(() => String, {nullable:false})
    responseText!: string;

    @Field(() => Date, {nullable:false})
    responseDate!: Date;

    @Field(() => ReviewsResponsesStatus, {nullable:false,defaultValue:'pending'})
    status!: keyof typeof ReviewsResponsesStatus;

    @Field(() => ReviewResponse, {nullable:true})
    reviewResponse?: ReviewResponse | null;

    @Field(() => [ReviewResponse], {nullable:true})
    otherReviewResponses?: Array<ReviewResponse>;

    @Field(() => Review, {nullable:false})
    review?: Review;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => ReviewResponseCount, {nullable:false})
    _count?: ReviewResponseCount;
}
