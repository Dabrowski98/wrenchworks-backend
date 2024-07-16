import { InputType, Field } from '@nestjs/graphql';
import { ReviewsStatus } from '@prisma/client';

@InputType()
export class UpdateReviewInput {
  @Field(() => BigInt)
  reviewId: bigint;

  @Field(() => BigInt, { nullable: true })
  userId?: bigint;

  @Field(() => BigInt, { nullable: true })
  workshopId?: bigint;

  @Field({ nullable: true })
  rating?: number;

  @Field({ nullable: true })
  reviewText?: string;

  @Field({ nullable: true })
  reviewDate?: Date;

  @Field(() => ReviewsStatus)
  status: ReviewsStatus;
}
