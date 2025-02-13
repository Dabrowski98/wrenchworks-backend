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
  DeleteManyReviewArgs,
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
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { EditReviewArgs } from './custom-dto/edit-review.args';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards';
import { OrGuards } from 'src/common/decorators/guard-decorators/or-guards.decorator';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { CurrentEntity } from 'src/common/decorators/jwt-decorators/current-entity.decorator';
import { CurrentAbility } from 'src/common/decorators/jwt-decorators/current-ability.decorator';
import { PureAbility } from '@casl/ability';
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
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => Review)
  review(@Args() args: FindUniqueReviewArgs): Promise<Review> {
    return this.reviewService.findOne(args);
  }

  // PUBLIC
  @Public()
  @CheckAbilities({ action: Action.Read, subject: 'Review' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Query(() => [Review])
  reviews(@Args() args?: FindManyReviewArgs): Promise<Review[]> {
    return this.reviewService.findMany(args);
  }

  // ADMIN
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

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'Review' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  deleteManyReview(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: DeleteManyReviewArgs,
  ): Promise<boolean> {
    return this.reviewService.deleteMany(currentEntity, args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => User, { nullable: true })
  user(
    @CurrentAbility() ability: PureAbility,
    @Parent() review: Review,
  ): Promise<User | null> {
    return this.reviewService.user(ability, review.reviewId);
  }

  @ResolveField(() => Workshop, { nullable: true })
  workshop(
    @CurrentAbility() ability: PureAbility,
    @Parent() review: Review,
  ): Promise<Workshop | null> {
    return this.reviewService.workshop(ability, review.reviewId);
  }

  @ResolveField(() => [ReviewResponse], { nullable: true })
  responses(
    @CurrentAbility() ability: PureAbility,
    @Parent() review: Review,
  ): Promise<ReviewResponse[]> {
    return this.reviewService.reviewResponses(ability, review.reviewId);
  }

  @ResolveField(() => ReviewCount)
  _count(
    @CurrentAbility() ability: PureAbility,
    @Parent() review: Review,
  ): Promise<ReviewCount> {
    return this.reviewService.resolveCount(ability, review.reviewId);
  }
}
