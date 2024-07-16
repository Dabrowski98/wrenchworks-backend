import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { Workshop } from '../../workshop/entities/workshop.entity';
import { ReviewsStatus } from '@prisma/client';
import { ReviewResponse } from 'src/modules/review-response/entities/review-response.entity';
// import { ReviewResponse } from '../review-response/review-response.entity'; // Uncomment if needed

@ObjectType()
export class Review {
  @Field(() => BigInt)
  reviewId: bigint;

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

  @Field(() => User)
  user: User;

  @Field(() => Workshop)
  workshop: Workshop;

  @Field(() => [ReviewResponse])
  reviewResponses: ReviewResponse[];
}

registerEnumType(ReviewsStatus, {
  name: 'ReviewsStatus',
});
