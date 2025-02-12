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
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { JwtUserPayload } from '../auth/user-auth/dto';
import { EditReviewArgs } from './custom-dto/edit-review.args';
@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  // ADMIN, USER
  @CheckAbilities({ action: Action.Create, subject: 'Review' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Review)
  createReview(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: CreateOneReviewArgs,
  ): Promise<Review> {
    return this.reviewService.create(currentUser, args);
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'Review' })
  @Query(() => Review)
  review(@Args() args: FindUniqueReviewArgs): Promise<Review> {
    return this.reviewService.findOne(args);
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'Review' })
  @Query(() => [Review])
  reviews(@Args() args?: FindManyReviewArgs): Promise<Review[]> {
    return this.reviewService.findMany(args);
  }

  // ADMIN, USER
  @CheckAbilities({ action: Action.Moderate, subject: 'Review' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Review)
  updateReview(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: UpdateOneReviewArgs,
  ): Promise<Review> {
    return this.reviewService.update(currentUser, args);
  }

  // ADMIN, USER
  @CheckAbilities({ action: Action.Update, subject: 'Review' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Review)
  editReview(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: EditReviewArgs,
  ): Promise<Review> {
    return this.reviewService.edit(currentUser, args);
  }

  // ADMIN, USER
  @CheckAbilities({ action: Action.Delete, subject: 'Review' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  deleteReview(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: DeleteOneReviewArgs,
  ): Promise<boolean> {
    return this.reviewService.delete(currentUser, args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'Review' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Review)
  acceptReview(
    @Args('reviewId', { type: () => GraphQLBigInt }) reviewId: bigint,
  ): Promise<Review> {
    return this.reviewService.accept(reviewId);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'Review' })
  @UseGuards(UserJwtAuthGuard)
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
