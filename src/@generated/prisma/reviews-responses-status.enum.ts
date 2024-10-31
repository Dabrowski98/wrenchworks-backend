import { registerEnumType } from '@nestjs/graphql';

export enum ReviewsResponsesStatus {
    pending = "pending",
    accepted = "accepted",
    denied = "denied"
}


registerEnumType(ReviewsResponsesStatus, { name: 'ReviewsResponsesStatus', description: undefined })
