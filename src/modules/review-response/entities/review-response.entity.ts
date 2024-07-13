import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Review } from '../../review/entities/review.entity';
import { User } from '../../user/entities/user.entity';
import { ReviewsResponsesStatus } from '@prisma/client';

@ObjectType()
export class ReviewResponse {
  @Field(() => BigInt)
  reviewResponseId: bigint;

  @Field(() => BigInt)
  reviewId: bigint;

  @Field(() => BigInt)
  userId: bigint;

  @Field(() => BigInt, { nullable: true })
  parentResponseId?: bigint;

  @Field()
  responseText: string;

  @Field()
  responseDate: Date;

  @Field(() => ReviewsResponsesStatus)
  status: ReviewsResponsesStatus;

  @Field(() => ReviewResponse, { nullable: true })
  reviewResponse?: ReviewResponse;

  @Field(() => [ReviewResponse])
  otherReviewResponses: ReviewResponse[];

  @Field(() => Review)
  review: Review;

  @Field(() => User)
  user: User;
}

registerEnumType(ReviewsResponsesStatus, { name: 'ReviewsResponsesStatus' });
