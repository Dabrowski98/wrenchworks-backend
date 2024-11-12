import { registerEnumType } from '@nestjs/graphql';

export enum ReviewResponseScalarFieldEnum {
    reviewResponseId = "reviewResponseId",
    reviewId = "reviewId",
    userId = "userId",
    parentResponseId = "parentResponseId",
    responseText = "responseText",
    responseDate = "responseDate",
    status = "status"
}


registerEnumType(ReviewResponseScalarFieldEnum, { name: 'ReviewResponseScalarFieldEnum', description: undefined })
