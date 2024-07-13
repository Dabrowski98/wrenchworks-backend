import { InputType, Field } from '@nestjs/graphql';
import { ReviewsStatus } from '@prisma/client';

@InputType()
export class CreateReviewInput {
  @Field(() => BigInt)
  userId: bigint;

  @Field(() => BigInt)
  workshopId: bigint;

  @Field()
  rating: number;

  @Field()
  reviewText: string;

  @Field()
  reviewDate: Date;

  @Field(() => ReviewsStatus)
  status: ReviewsStatus;
}
