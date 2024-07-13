import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateReviewInput, UpdateReviewInput } from './dto/index';

@Injectable()
export class ReviewService {
  constructor(private databaseService: DatabaseService) {}

  async createReview(data: CreateReviewInput) {
    return this.databaseService.review.create({
      data: {
        userId: data.userId,
        workshopId: data.workshopId,
        rating: data.rating,
        reviewText: data.reviewText,
        reviewDate: data.reviewDate,
        status: data.status,
      },
    });
  }

  async updateReview(data: UpdateReviewInput) {
    return this.databaseService.review.update({
      where: { reviewId: data.reviewId },
      data: {
        userId: data.userId,
        workshopId: data.workshopId,
        rating: data.rating,
        reviewText: data.reviewText,
        reviewDate: data.reviewDate,
        status: data.status,
      },
    });
  }

  async findAllReviews() {
    return this.databaseService.review.findMany();
  }

  async findReviewById(reviewId: bigint) {
    return this.databaseService.review.findUnique({
      where: { reviewId },
    });
  }

  async deleteReview(reviewId: bigint) {
    return this.databaseService.review.delete({
      where: { reviewId },
    });
  }
}
