import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ReviewResponseStatus } from '../../prisma/dto/review-response-status.enum';
import { Review } from '../../review/dto/review.model';
import { Type } from 'class-transformer';
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

    @Field(() => String, {nullable:true})
    originalResponseText!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    /**
     * Note: Optional because field defaults to pending
     */
    @Field(() => ReviewResponseStatus, {nullable:false,defaultValue:'PENDING',description:'Note: Optional because field defaults to pending'})
    status!: keyof typeof ReviewResponseStatus;

    @Field(() => ReviewResponse, {nullable:true})
    parentResponse?: ReviewResponse | null;

    @Field(() => [ReviewResponse], {nullable:true})
    childrenResponses?: Array<ReviewResponse>;

    @Field(() => Review, {nullable:false})
    @Type(() => Review)
    review?: Review;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => ReviewResponseCount, {nullable:false})
    _count?: ReviewResponseCount;
}
