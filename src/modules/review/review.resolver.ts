import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import {
  CreateOneReviewArgs,
  DeleteOneReviewArgs,
  FindManyReviewArgs,
  FindUniqueReviewArgs,
  UpdateOneReviewArgs,
  Review,
  ReviewCount,
} from './dto';
import { UseGuards } from '@nestjs/common';
import { ReviewService } from './review.service';
import { User } from '../user/dto/user.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { ReviewResponse } from '../review-response/dto/review-response.model';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Mutation(() => Review)
  createReview(@Args() args: CreateOneReviewArgs): Promise<Review> {
    return this.reviewService.create(args);
  }

  @Query(() => Review)
  review(@Args() args: FindUniqueReviewArgs): Promise<Review> {
    return this.reviewService.findOne(args);
  }

  @Query(() => [Review])
  reviews(@Args() args: FindManyReviewArgs): Promise<Review[]> {
    return this.reviewService.findMany(args);
  }

  @Mutation(() => Review)
  updateReview(@Args() args: UpdateOneReviewArgs): Promise<Review> {
    return this.reviewService.update(args);
  }

  @Mutation(() => Review)
  editReview(@Args() args: UpdateOneReviewArgs): Promise<Review> {
    return this.reviewService.edit(args);
  }

  @Mutation(() => Boolean)
  deleteReview(@Args() args: DeleteOneReviewArgs): Promise<boolean> {
    return this.reviewService.delete(args);
  }

  @Mutation(() => Review)
  acceptReview(
    @Args('reviewId', { type: () => GraphQLBigInt }) reviewId: bigint,
  ): Promise<Review> {
    return this.reviewService.accept(reviewId);
  }

  @Mutation(() => Review)
  rejectReview(
    @Args('reviewId', { type: () => GraphQLBigInt }) reviewId: bigint,
  ): Promise<Review> {
    return this.reviewService.reject(reviewId);
  }

  // RESOLVE FIELDS

  @ResolveField(() => User, { nullable: true })
  user(@Parent() review: Review): Promise<User | null> {
    return this.reviewService.user(review.reviewId);
  }

  @ResolveField(() => Workshop, { nullable: true })
  workshop(@Parent() review: Review): Promise<Workshop | null> {
    return this.reviewService.workshop(review.reviewId);
  }

  @ResolveField(() => [ReviewResponse])
  reviewResponses(@Parent() review: Review): Promise<ReviewResponse[]> {
    return this.reviewService.reviewResponses(review.reviewId);
  }

  @ResolveField(() => ReviewCount)
  _count(@Parent() review: Review): Promise<ReviewCount> {
    return this.reviewService.resolveCount(review.reviewId);
  }
}
