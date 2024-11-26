import { registerEnumType } from '@nestjs/graphql';

export enum ReviewsResponsesStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    DENIED = "DENIED"
}


registerEnumType(ReviewsResponsesStatus, { name: 'ReviewsResponsesStatus', description: undefined })
