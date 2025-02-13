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
  DeleteManyReviewResponseArgs,
} from './dto';
import { UseGuards } from '@nestjs/common';
import { ReviewResponseService } from './review-response.service';
import { User } from '../user/dto/user.model';
import { Review } from '../review/dto/review.model';
import { CurrentUserID } from 'src/common/decorators/jwt-decorators/current-user-id.decorator';
import { Action, CheckAbilities } from '../ability';
import { AbilitiesGuard } from '../ability/abilities.guard';
import { UserJwtAuthGuard } from '../auth/user-auth/guards';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { Public } from 'src/common/decorators/guard-decorators/public.decorator';
import { EditReviewResponseArgs } from './custom-dto/edit-review-response.args';
import { OrGuards } from '../ability/or-guards';
import { EmployeeJwtAuthGuard } from '../auth/employee-auth/guards';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { CurrentEntity } from '../ability/current-entity.decorator';

@Resolver(() => ReviewResponse)
export class ReviewResponseResolver {
  constructor(private readonly reviewResponseService: ReviewResponseService) {}

  // ADMIN, USER
  @CheckAbilities({ action: Action.Create, subject: 'ReviewResponse' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => ReviewResponse)
  createReviewResponse(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: CreateOneReviewResponseArgs,
  ): Promise<ReviewResponse> {
    return this.reviewResponseService.create(currentUser, args);
  }

  // PUBLIC
  @Public()
  @Query(() => ReviewResponse)
  reviewResponse(
    @Args() args: FindUniqueReviewResponseArgs,
  ): Promise<ReviewResponse> {
    return this.reviewResponseService.findOne(args);
  }

  // PUBLIC
  @Public()
  @Query(() => [ReviewResponse])
  reviewResponses(
    @Args() args?: FindManyReviewResponseArgs,
  ): Promise<ReviewResponse[]> {
    return this.reviewResponseService.findMany(args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'ReviewResponse' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => ReviewResponse)
  updateReviewResponse(
    @Args() args: UpdateOneReviewResponseArgs,
  ): Promise<ReviewResponse> {
    return this.reviewResponseService.update(args);
  }

  // ADMIN, USER
  @CheckAbilities({ action: Action.Update, subject: 'ReviewResponse' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => ReviewResponse)
  editReviewResponse(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: EditReviewResponseArgs,
  ): Promise<ReviewResponse> {
    return this.reviewResponseService.edit(currentUser, args);
  }

  // ADMIN, USER
  @CheckAbilities({ action: Action.Delete, subject: 'ReviewResponse' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  deleteReviewResponse(
    @CurrentUser() currentUser: JwtUserPayload,
    @Args() args: DeleteOneReviewResponseArgs,
  ): Promise<boolean> {
    return this.reviewResponseService.delete(currentUser, args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'ReviewResponse' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  acceptReviewResponse(
    @Args() args: DeleteOneReviewResponseArgs,
  ): Promise<boolean> {
    return this.reviewResponseService.accept(args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'ReviewResponse' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  rejectReviewResponse(
    @Args() args: DeleteOneReviewResponseArgs,
  ): Promise<boolean> {
    return this.reviewResponseService.reject(args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Moderate, subject: 'ReviewResponse' })
  @UseGuards(UserJwtAuthGuard)
  @Mutation(() => Boolean)
  hideReviewResponse(
    @Args() args: DeleteOneReviewResponseArgs,
  ): Promise<boolean> {
    return this.reviewResponseService.hide(args);
  }

  // ADMIN
  @CheckAbilities({ action: Action.Delete, subject: 'ReviewResponse' })
  @OrGuards(UserJwtAuthGuard, EmployeeJwtAuthGuard)
  @Mutation(() => Boolean)
  deleteManyReviewResponse(
    @CurrentEntity() currentEntity: JwtEmployeePayload | JwtUserPayload,
    @Args() args: DeleteManyReviewResponseArgs,
  ): Promise<boolean> {
    return this.reviewResponseService.deleteMany(currentEntity, args);
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
