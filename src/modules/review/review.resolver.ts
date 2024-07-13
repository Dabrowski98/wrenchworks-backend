import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import { Review } from './entities/review.entity';
import { CreateReviewInput, UpdateReviewInput } from './dto/index';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Mutation(() => Review)
  async createReview(@Args('data') data: CreateReviewInput) {
    return this.reviewService.createReview(data);
  }

  @Mutation(() => Review)
  async updateReview(@Args('data') data: UpdateReviewInput) {
    return this.reviewService.updateReview(data);
  }

  @Query(() => [Review])
  async reviews() {
    return this.reviewService.findAllReviews();
  }

  @Query(() => Review, { nullable: true })
  async review(@Args('reviewId', { type: () => BigInt }) reviewId: bigint) {
    return this.reviewService.findReviewById(reviewId);
  }

  @Mutation(() => Review)
  async deleteReview(@Args('reviewId', { type: () => BigInt }) reviewId: bigint) {
    return this.reviewService.deleteReview(reviewId);
  }
}
