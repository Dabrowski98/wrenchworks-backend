import { Injectable } from '@nestjs/common';
import {
  CreateOneReviewArgs,
  UpdateOneReviewArgs,
  DeleteOneReviewArgs,
  FindUniqueReviewArgs,
  FindManyReviewArgs,
  Review,
  ReviewCount,
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
import { ForbiddenError } from '@casl/ability';
import { AbilityFactory, Action } from '../ability/ability.factory';
import { subject } from '@casl/ability';
import { CurrentUser } from 'src/common/decorators/jwt-decorators/current-user.decorator';
import { EditReviewArgs } from './custom-dto/edit-review.args';

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

  // RESOLVE METHODS

  async user(reviewId: bigint): Promise<User | null> {
    const review = await this.prisma.review.findUnique({
      where: { reviewId },
      include: { user: true },
    });
    return review?.user || null;
  }

  async workshop(reviewId: bigint): Promise<Workshop | null> {
    const review = await this.prisma.review.findUnique({
      where: { reviewId },
      include: { workshop: true },
    });
    return review?.workshop || null;
  }

  async reviewResponses(reviewId: bigint): Promise<ReviewResponse[]> {
    return this.prisma.reviewResponse.findMany({
      where: { reviewId },
    });
  }

  async resolveCount(reviewId: bigint): Promise<ReviewCount> {
    return {
      reviewResponses: await this.prisma.reviewResponse.count({
        where: { reviewId },
      }),
    };
  }
}
