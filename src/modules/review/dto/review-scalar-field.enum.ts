import { registerEnumType } from '@nestjs/graphql';

export enum ReviewScalarFieldEnum {
    reviewId = "reviewId",
    userId = "userId",
    workshopId = "workshopId",
    rating = "rating",
    originalRating = "originalRating",
    reviewText = "reviewText",
    originalReviewText = "originalReviewText",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    status = "status"
}


registerEnumType(ReviewScalarFieldEnum, { name: 'ReviewScalarFieldEnum', description: undefined })
