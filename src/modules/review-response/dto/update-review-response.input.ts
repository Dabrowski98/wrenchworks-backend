import { InputType, Field } from '@nestjs/graphql';
import { ReviewsResponsesStatus } from '@prisma/client';

@InputType()
export class UpdateReviewResponseInput {
  @Field(() => BigInt)
  reviewResponseId: bigint;

  @Field(() => BigInt, { nullable: true })
  reviewId?: bigint;

  @Field(() => BigInt, { nullable: true })
  userId?: bigint;

  @Field(() => BigInt, { nullable: true })
  parentResponseId?: bigint;

  @Field({ nullable: true })
  responseText?: string;

  @Field({ nullable: true })
  responseDate?: Date;

  @Field(() => ReviewsResponsesStatus, { nullable: true })
  status?: ReviewsResponsesStatus;
}
