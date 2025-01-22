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
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { ReviewStatus } from '../prisma';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneReviewArgs): Promise<Review> {
    return this.prisma.review.create({
      data: { ...args.data, status: ReviewStatus.PENDING },
    });
  }

  async findOne(args: FindUniqueReviewArgs): Promise<Review> {
    const review = await this.prisma.review.findUnique(args);
    if (!review) throw new RecordNotFoundError(Review);
    return review;
  }

  async findMany(args: FindManyReviewArgs): Promise<Review[]> {
    return this.prisma.review.findMany(args);
  }

  async update(args: UpdateOneReviewArgs): Promise<Review> {
    return this.prisma.review.update({
      where: args.where,
      data: args.data,
    });
  }

  async edit(args: UpdateOneReviewArgs): Promise<Review> {
    return this.prisma.review.update({
      where: args.where,
      data: args.data,
    });
  }

  async delete(args: DeleteOneReviewArgs): Promise<boolean> {
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
