import { Injectable } from '@nestjs/common';
import {
  CreateOneReviewResponseArgs,
  UpdateOneReviewResponseArgs,
  DeleteOneReviewResponseArgs,
  FindUniqueReviewResponseArgs,
  FindManyReviewResponseArgs,
  ReviewResponse,
  ReviewResponseCount,
} from './dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from '../user/dto/user.model';
import { Review } from '../review/dto/review.model';
import {
  BadRequestError,
  RecordNotFoundError,
} from 'src/common/custom-errors/errors.config';
import { ReviewResponseStatus } from '@prisma/client';

@Injectable()
export class ReviewResponseService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    args: CreateOneReviewResponseArgs,
    userId: bigint,
  ): Promise<ReviewResponse> {
    return this.prisma.reviewResponse.create({
      data: {
        ...args.data,
        status: ReviewResponseStatus.PENDING,
        user: { connect: { userId } },
      },
    });
  }

  async findOne(args: FindUniqueReviewResponseArgs): Promise<ReviewResponse> {
    const reviewResponse = await this.prisma.reviewResponse.findUnique(args);
    if (!reviewResponse) throw new RecordNotFoundError(ReviewResponse);
    return reviewResponse;
  }

  async findMany(args: FindManyReviewResponseArgs): Promise<ReviewResponse[]> {
    return this.prisma.reviewResponse.findMany(args);
  }

  async update(args: UpdateOneReviewResponseArgs): Promise<ReviewResponse> {
    return this.prisma.reviewResponse.update({
      where: args.where,
      data: args.data,
    });
  }

  async edit(args: UpdateOneReviewResponseArgs): Promise<ReviewResponse> {
    const reviewResponseId = args.where.reviewResponseId;

    const reviewResponseBeforeEdit = await this.findOne({
      where: { reviewResponseId },
    });

    return this.prisma.reviewResponse.update({
      where: { reviewResponseId },
      data: {
        ...args.data,
        originalResponseText: reviewResponseBeforeEdit.responseText,
      },
    });
  }

  async delete(args: DeleteOneReviewResponseArgs): Promise<boolean> {
    return this.prisma.reviewResponse
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  async hide(args: DeleteOneReviewResponseArgs): Promise<boolean> {
    return this.prisma.reviewResponse
      .update({
        where: args.where,
        data: { status: ReviewResponseStatus.HIDDEN },
      })
      .then(() => true)
      .catch(() => false);
  }

  async accept(args: DeleteOneReviewResponseArgs): Promise<boolean> {
    const reviewResponse = await this.findOne(args);
    if (reviewResponse.status === ReviewResponseStatus.REJECTED) {
      throw new BadRequestError(
        'Review response is already rejected, cannot accept',
      );
    }

    return this.prisma.reviewResponse
      .update({
        where: args.where,
        data: { status: ReviewResponseStatus.ACCEPTED },
      })
      .then(() => true)
      .catch(() => false);
  }

  async reject(args: DeleteOneReviewResponseArgs): Promise<boolean> {
    const reviewResponse = await this.findOne(args);
    if (reviewResponse.status === ReviewResponseStatus.ACCEPTED) {
      throw new BadRequestError(
        'Review response is already accepted, cannot reject',
      );
    }

    return this.prisma.reviewResponse
      .update({
        where: args.where,
        data: { status: ReviewResponseStatus.REJECTED },
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async parentResponse(reviewResponseId: bigint): Promise<ReviewResponse> {
    return (
      await this.prisma.reviewResponse.findUnique({
        where: { reviewResponseId },
        include: { parentResponse: true },
      })
    ).parentResponse;
  }

  async childrenResponses(reviewResponseId: bigint): Promise<ReviewResponse[]> {
    return (
      await this.prisma.reviewResponse.findUnique({
        where: { reviewResponseId },
        include: { childrenResponses: true },
      })
    ).childrenResponses;
  }

  async review(reviewResponseId: bigint): Promise<Review | null> {
    return (
      await this.prisma.reviewResponse.findUnique({
        where: { reviewResponseId },
        include: { review: true },
      })
    ).review;
  }

  async user(reviewResponseId: bigint): Promise<User | null> {
    return (
      await this.prisma.reviewResponse.findUnique({
        where: { reviewResponseId },
        include: { user: true },
      })
    ).user;
  }

  async resolveCount(reviewResponseId: bigint): Promise<ReviewResponseCount> {
    return {
      childrenResponses: await this.prisma.reviewResponse.count({
        where: { parentResponseId: reviewResponseId },
      }),
    };
  }
}
