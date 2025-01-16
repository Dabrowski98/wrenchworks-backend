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

@Resolver(() => ReviewResponse)
export class ReviewResponseResolver {
  constructor(private readonly reviewResponseService: ReviewResponseService) {}

  @Mutation(() => ReviewResponse)
  createReviewResponse(
    @Args() args: CreateOneReviewResponseArgs,
    @CurrentUserID() userId: bigint,
  ): Promise<ReviewResponse> {
    return this.reviewResponseService.create(args, userId);
  }

  @Query(() => ReviewResponse)
  reviewResponse(
    @Args() args: FindUniqueReviewResponseArgs,
  ): Promise<ReviewResponse> {
    return this.reviewResponseService.findOne(args);
  }

  @Query(() => [ReviewResponse])
  reviewResponses(
    @Args() args: FindManyReviewResponseArgs,
  ): Promise<ReviewResponse[]> {
    return this.reviewResponseService.findMany(args);
  }

  @Mutation(() => ReviewResponse)
  updateReviewResponse(
    @Args() args: UpdateOneReviewResponseArgs,
  ): Promise<ReviewResponse> {
    return this.reviewResponseService.update(args);
  }

  @Mutation(() => ReviewResponse)
  editReviewResponse(
    @Args() args: UpdateOneReviewResponseArgs,
  ): Promise<ReviewResponse> {
    return this.reviewResponseService.edit(args);
  }

  @Mutation(() => Boolean)
  deleteReviewResponse(
    @Args() args: DeleteOneReviewResponseArgs,
  ): Promise<boolean> {
    return this.reviewResponseService.delete(args);
  }

  @Mutation(() => Boolean)
  hideReviewResponse(
    @Args() args: DeleteOneReviewResponseArgs,
  ): Promise<boolean> {
    return this.reviewResponseService.hide(args);
  }

  @Mutation(() => Boolean)
  acceptReviewResponse(
    @Args() args: DeleteOneReviewResponseArgs,
  ): Promise<boolean> {
    return this.reviewResponseService.accept(args);
  }

  @Mutation(() => Boolean)
  rejectReviewResponse(
    @Args() args: DeleteOneReviewResponseArgs,
  ): Promise<boolean> {
    return this.reviewResponseService.reject(args);
  }

  // RESOLVE FIELDS

  @ResolveField(() => ReviewResponse, { nullable: true })
  parentResponse(
    @Parent() reviewResponse: ReviewResponse,
  ): Promise<ReviewResponse | null> {
    return this.reviewResponseService.parentResponse(
      reviewResponse.reviewResponseId,
    );
  }

  @ResolveField(() => [ReviewResponse], { nullable: true })
  childrenResponses(
    @Parent() reviewResponse: ReviewResponse,
  ): Promise<ReviewResponse[]> {
    return this.reviewResponseService.childrenResponses(
      reviewResponse.reviewResponseId,
    );
  }

  @ResolveField(() => Review, { nullable: true })
  review(@Parent() reviewResponse: ReviewResponse): Promise<Review | null> {
    return this.reviewResponseService.review(reviewResponse.reviewResponseId);
  }

  @ResolveField(() => User, { nullable: true })
  user(@Parent() reviewResponse: ReviewResponse): Promise<User | null> {
    return this.reviewResponseService.user(reviewResponse.reviewResponseId);
  }

  @ResolveField(() => ReviewResponseCount)
  _count(
    @Parent() reviewResponse: ReviewResponse,
  ): Promise<ReviewResponseCount> {
    return this.reviewResponseService.resolveCount(
      reviewResponse.reviewResponseId,
    );
  }
}
