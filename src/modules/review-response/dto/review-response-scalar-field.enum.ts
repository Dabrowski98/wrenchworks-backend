import { registerEnumType } from '@nestjs/graphql';

export enum ReviewResponseScalarFieldEnum {
    reviewResponseId = "reviewResponseId",
    reviewId = "reviewId",
    userId = "userId",
    parentResponseId = "parentResponseId",
    responseText = "responseText",
    originalResponseText = "originalResponseText",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    status = "status"
}


registerEnumType(ReviewResponseScalarFieldEnum, { name: 'ReviewResponseScalarFieldEnum', description: undefined })
