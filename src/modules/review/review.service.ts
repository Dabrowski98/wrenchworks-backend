import { Injectable } from '@nestjs/common';
import {
  CreateOneReviewArgs,
  UpdateOneReviewArgs,
  DeleteOneReviewArgs,
  FindUniqueReviewArgs,
  FindManyReviewArgs,
  Review,
  ReviewCount,
  DeleteManyReviewArgs,
} from './dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from '../user/dto/user.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { ReviewResponse } from '../review-response/dto/review-response.model';
import {
  BadRequestError,
  RecordNotFoundError,
} from 'src/common/custom-errors/errors.config';
import { ReviewStatus } from '../prisma';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { ForbiddenError, PureAbility } from '@casl/ability';
import { AbilityFactory, Action } from '../ability/ability.factory';
import { subject } from '@casl/ability';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { EditReviewArgs } from './custom-dto/edit-review.args';
import { accessibleBy } from '@casl/prisma';

@Injectable()
export class ReviewService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(
    currentUser: JwtUserPayload,
    args: CreateOneReviewArgs,
  ): Promise<Review> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const user = await this.prisma.user.findUnique({
      where: { userId: args.data.user.connect.userId },
    });
    if (!user) throw new RecordNotFoundError(User);

    const review = await this.prisma.review.findFirst({
      where: {
        userId: user.userId,
        workshopId: args.data.workshop.connect.workshopId,
      },
    });
    if (review)
      throw new BadRequestError('User already reviewed this workshop');

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Review', {
        userId: user.userId,
      } as any),
    );

    return this.prisma.review.create({
      data: { ...args.data, status: ReviewStatus.PENDING },
    });
  }

  async findOne(args: FindUniqueReviewArgs): Promise<Review> {
    const review = await this.prisma.review.findUnique(args);
    if (!review) throw new RecordNotFoundError(Review);
    return review;
  }

  async findMany(args?: FindManyReviewArgs): Promise<Review[]> {
    return this.prisma.review.findMany(args || {});
  }

  async update(
    currentUser: JwtUserPayload,
    args: UpdateOneReviewArgs,
  ): Promise<Review> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const review = await this.prisma.review.findUnique({
      where: { reviewId: args.where.reviewId },
    });
    if (!review) throw new RecordNotFoundError(Review);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Moderate,
      subject('Review', review),
    );

    return this.prisma.review.update({
      where: args.where,
      data: args.data,
    });
  }

  async edit(
    currentUser: JwtUserPayload,
    args: EditReviewArgs,
  ): Promise<Review> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const review = await this.prisma.review.findUnique({
      where: { reviewId: args.where.reviewId },
    });
    if (!review) throw new RecordNotFoundError(Review);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Review', review),
    );

    return this.prisma.review.update({
      where: args.where,
      data: args.data,
    });
  }

  async delete(
    currentUser: JwtUserPayload,
    args: DeleteOneReviewArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const review = await this.prisma.review.findUnique({
      where: { reviewId: args.where.reviewId },
    });
    if (!review) throw new RecordNotFoundError(Review);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('Review', review),
    );

    return this.prisma.review
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  async accept(reviewId: bigint): Promise<Review> {
    return this.prisma.review.update({
      where: { reviewId },
      data: { status: ReviewStatus.ACCEPTED },
    });
  }

  async reject(reviewId: bigint): Promise<Review> {
    return this.prisma.review.update({
      where: { reviewId },
      data: { status: ReviewStatus.REJECTED },
    });
  }

  async deleteMany(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: DeleteManyReviewArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const reviews = await this.prisma.review.findMany({
      where: { AND: [accessibleBy(ability).Review, args.where] },
    });

    reviews.forEach((review) => {
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Delete,
        subject('Review', review),
      );
    });

    return this.prisma.review
      .deleteMany({
        where: { AND: [accessibleBy(ability).Review, args.where] },
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async user(ability: PureAbility, reviewId: bigint): Promise<User | null> {
    return (
      (await this.prisma.user.findFirst({
        where: {
          AND: [
            accessibleBy(ability).User,
            { reviews: { some: { reviewId } } },
          ],
        },
      })) || null
    );
  }

  async workshop(
    ability: PureAbility,
    reviewId: bigint,
  ): Promise<Workshop | null> {
    return (
      (await this.prisma.workshop.findFirst({
        where: {
          AND: [
            accessibleBy(ability).Workshop,
            { reviews: { some: { reviewId } } },
          ],
        },
      })) || null
    );
  }

  async reviewResponses(
    ability: PureAbility,
    reviewId: bigint,
  ): Promise<ReviewResponse[]> {
    return await this.prisma.reviewResponse.findMany({
      where: {
        AND: [accessibleBy(ability).ReviewResponse, { reviewId }],
      },
    });
  }

  async resolveCount(
    ability: PureAbility,
    reviewId: bigint,
  ): Promise<ReviewCount> {
    const [reviewResponses] = await this.prisma.$transaction([
      this.prisma.reviewResponse.count({
        where: {
          AND: [accessibleBy(ability).ReviewResponse, { reviewId }],
        },
      }),
    ]);

    return {
      reviewResponses,
    };
  }
}
