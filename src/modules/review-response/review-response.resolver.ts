import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReviewResponseService } from './review-response.service';
import { ReviewResponse } from './entities/review-response.entity';
import { CreateReviewResponseInput, UpdateReviewResponseInput } from './dto';

@Resolver(() => ReviewResponse)
export class ReviewResponseResolver {
  constructor(private readonly reviewResponseService: ReviewResponseService) {}

  @Mutation(() => ReviewResponse)
  async createReviewResponse(@Args('data') data: CreateReviewResponseInput) {
    return this.reviewResponseService.createReviewResponse(data);
  }

  @Mutation(() => ReviewResponse)
  async updateReviewResponse(@Args('data') data: UpdateReviewResponseInput) {
    return this.reviewResponseService.updateReviewResponse(data);
  }

  @Query(() => [ReviewResponse])
  async reviewResponses() {
    return this.reviewResponseService.findAllReviewResponses();
  }

  @Query(() => ReviewResponse, { nullable: true })
  async reviewResponse(@Args('reviewResponseId', { type: () => BigInt }) reviewResponseId: bigint) {
    return this.reviewResponseService.findReviewResponseById(reviewResponseId);
  }

  @Mutation(() => ReviewResponse)
  async deleteReviewResponse(@Args('reviewResponseId', { type: () => BigInt }) reviewResponseId: bigint) {
    return this.reviewResponseService.deleteReviewResponse(reviewResponseId);
  }
}
