import { InputType, Field } from '@nestjs/graphql';
import { ReviewsResponsesStatus } from '@prisma/client';

@InputType()
export class CreateReviewResponseInput {
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
}
