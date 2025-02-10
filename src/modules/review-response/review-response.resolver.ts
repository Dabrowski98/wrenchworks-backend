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
  CreateOneReviewResponseArgs,
  DeleteOneReviewResponseArgs,
  FindManyReviewResponseArgs,
  FindUniqueReviewResponseArgs,
  UpdateOneReviewResponseArgs,
  ReviewResponse,
  ReviewResponseCount,
} from './dto';
import { UseGuards } from '@nestjs/common';
import { ReviewResponseService } from './review-response.service';
import { User } from '../user/dto/user.model';
import { Review } from '../review/dto/review.model';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { Action, CheckAbilities } from '../ability';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';

@UseGuards(UserJwtAuthGuard, AbilitiesGuard)
@Resolver(() => ReviewResponse)
export class ReviewResponseResolver {
  constructor(private readonly reviewResponseService: ReviewResponseService) {}

  @CheckAbilities({ action: Action.Create, subject: 'ReviewResponse' })
  @Mutation(() => ReviewResponse)
  createReviewResponse(
    @Args() args: CreateOneReviewResponseArgs,
    @CurrentUserID() userId: bigint,
  ): Promise<ReviewResponse> {
    return this.reviewResponseService.create(args, userId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'ReviewResponse' })
  @Query(() => ReviewResponse)
  reviewResponse(
    @Args() args: FindUniqueReviewResponseArgs,
  ): Promise<ReviewResponse> {
    return this.reviewResponseService.findOne(args);
  }

  @CheckAbilities({ action: Action.Read, subject: 'ReviewResponse' })
  @Query(() => [ReviewResponse])
  reviewResponses(
    @Args() args: FindManyReviewResponseArgs,
  ): Promise<ReviewResponse[]> {
    return this.reviewResponseService.findMany(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'ReviewResponse' })
  @Mutation(() => ReviewResponse)
  updateReviewResponse(
    @Args() args: UpdateOneReviewResponseArgs,
  ): Promise<ReviewResponse> {
    return this.reviewResponseService.update(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'ReviewResponse' })
  @Mutation(() => ReviewResponse)
  editReviewResponse(
    @Args() args: UpdateOneReviewResponseArgs,
  ): Promise<ReviewResponse> {
    return this.reviewResponseService.edit(args);
  }

  @CheckAbilities({ action: Action.Delete, subject: 'ReviewResponse' })
  @Mutation(() => Boolean)
  deleteReviewResponse(
    @Args() args: DeleteOneReviewResponseArgs,
  ): Promise<boolean> {
    return this.reviewResponseService.delete(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'ReviewResponse' })
  @Mutation(() => Boolean)
  hideReviewResponse(
    @Args() args: DeleteOneReviewResponseArgs,
  ): Promise<boolean> {
    return this.reviewResponseService.hide(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'ReviewResponse' })
  @Mutation(() => Boolean)
  acceptReviewResponse(
    @Args() args: DeleteOneReviewResponseArgs,
  ): Promise<boolean> {
    return this.reviewResponseService.accept(args);
  }

  @CheckAbilities({ action: Action.Update, subject: 'ReviewResponse' })
  @Mutation(() => Boolean)
  rejectReviewResponse(
    @Args() args: DeleteOneReviewResponseArgs,
  ): Promise<boolean> {
    return this.reviewResponseService.reject(args);
  }

  // RESOLVE FIELDS

  @CheckAbilities({ action: Action.Read, subject: 'ReviewResponse' })
  @ResolveField(() => ReviewResponse, { nullable: true })
  parentResponse(
    @Parent() reviewResponse: ReviewResponse,
  ): Promise<ReviewResponse | null> {
    return this.reviewResponseService.parentResponse(
      reviewResponse.reviewResponseId,
    );
  }

  @CheckAbilities({ action: Action.Read, subject: 'ReviewResponse' })
  @ResolveField(() => [ReviewResponse], { nullable: true })
  childrenResponses(
    @Parent() reviewResponse: ReviewResponse,
  ): Promise<ReviewResponse[]> {
    return this.reviewResponseService.childrenResponses(
      reviewResponse.reviewResponseId,
    );
  }

  @CheckAbilities({ action: Action.Read, subject: 'Review' })
  @ResolveField(() => Review, { nullable: true })
  review(@Parent() reviewResponse: ReviewResponse): Promise<Review | null> {
    return this.reviewResponseService.review(reviewResponse.reviewResponseId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'User' })
  @ResolveField(() => User)
  user(@Parent() reviewResponse: ReviewResponse): Promise<User> {
    return this.reviewResponseService.user(reviewResponse.reviewResponseId);
  }

  @CheckAbilities({ action: Action.Read, subject: 'ReviewResponse' })
  @ResolveField(() => ReviewResponseCount)
  _count(
    @Parent() reviewResponse: ReviewResponse,
  ): Promise<ReviewResponseCount> {
    return this.reviewResponseService.resolveCount(
      reviewResponse.reviewResponseId,
    );
  }
}
