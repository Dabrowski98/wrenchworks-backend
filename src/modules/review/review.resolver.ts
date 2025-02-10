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
import { Action, CheckAbilities } from '../ability';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';

@UseGuards(UserJwtAuthGuard, AbilitiesGuard)
@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @CheckAbilities({ action: Action.Create, subject: 'Review' })
  @Mutation(() => Review)
  createReview(@Args() args: CreateOneReviewArgs): Promise<Review> {
    return this.reviewService.create(args);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Review' })
  @Query(() => Review)
  review(@Args() args: FindUniqueReviewArgs): Promise<Review> {
    return this.reviewService.findOne(args);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Review' })
  @Query(() => [Review])
  reviews(@Args() args: FindManyReviewArgs): Promise<Review[]> {
    return this.reviewService.findMany(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'Review' })
  @Mutation(() => Review)
  updateReview(@Args() args: UpdateOneReviewArgs): Promise<Review> {
    return this.reviewService.update(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'Review' })
  @Mutation(() => Review)
  editReview(@Args() args: UpdateOneReviewArgs): Promise<Review> {
    return this.reviewService.edit(args);
  }

  @CheckAbilities({ action: Action.Delete, subject: 'Review' })
  @Mutation(() => Boolean)
  deleteReview(@Args() args: DeleteOneReviewArgs): Promise<boolean> {
    return this.reviewService.delete(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'Review' })
  @Mutation(() => Review)
  acceptReview(
    @Args('reviewId', { type: () => GraphQLBigInt }) reviewId: bigint,
  ): Promise<Review> {
    return this.reviewService.accept(reviewId);
  }

  @CheckAbilities({ action: Action.Update, subject: 'Review' })
  @Mutation(() => Review)
  rejectReview(
    @Args('reviewId', { type: () => GraphQLBigInt }) reviewId: bigint,
  ): Promise<Review> {
    return this.reviewService.reject(reviewId);
  }

  // RESOLVE FIELDS

  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @ResolveField(() => User)
  user(@Parent() review: Review): Promise<User> {
    return this.reviewService.user(review.reviewId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Workshop' })
  @ResolveField(() => Workshop)
  workshop(@Parent() review: Review): Promise<Workshop> {
    return this.reviewService.workshop(review.reviewId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'ReviewResponse' })
  @ResolveField(() => [ReviewResponse], { nullable: true })
  responses(@Parent() review: Review): Promise<ReviewResponse[]> {
    return this.reviewService.reviewResponses(review.reviewId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'Review' })
  @ResolveField(() => ReviewCount)
  _count(@Parent() review: Review): Promise<ReviewCount> {
    return this.reviewService.resolveCount(review.reviewId);
  }
}
