import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateReviewResponseInput, UpdateReviewResponseInput } from './dto';

@Injectable()
export class ReviewResponseService {
  constructor(private databaseService: DatabaseService) {}

  async createReviewResponse(data: CreateReviewResponseInput) {
    return this.databaseService.reviewResponse.create({
      data: {
        reviewId: data.reviewId,
        userId: data.userId,
        parentResponseId: data.parentResponseId,
        responseText: data.responseText,
        responseDate: data.responseDate,
        status: data.status,
      },
    });
  }

  async updateReviewResponse(data: UpdateReviewResponseInput) {
    return this.databaseService.reviewResponse.update({
      where: { reviewResponseId: data.reviewResponseId },
      data: {
        reviewId: data.reviewId,
        userId: data.userId,
        parentResponseId: data.parentResponseId,
        responseText: data.responseText,
        responseDate: data.responseDate,
        status: data.status,
      },
    });
  }

  async findAllReviewResponses() {
    return this.databaseService.reviewResponse.findMany();
  }

  async findReviewResponseById(reviewResponseId: bigint) {
    return this.databaseService.reviewResponse.findUnique({
      where: { reviewResponseId },
    });
  }

  async deleteReviewResponse(reviewResponseId: bigint) {
    return this.databaseService.reviewResponse.delete({
      where: { reviewResponseId },
    });
  }
}
