import { registerEnumType } from '@nestjs/graphql';

export enum ReviewScalarFieldEnum {
    reviewId = "reviewId",
    userId = "userId",
    workshopId = "workshopId",
    rating = "rating",
    reviewText = "reviewText",
    reviewDate = "reviewDate",
    status = "status"
}


registerEnumType(ReviewScalarFieldEnum, { name: 'ReviewScalarFieldEnum', description: undefined })
