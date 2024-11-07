import { registerEnumType } from '@nestjs/graphql';

export enum ReviewsStatus {
    pending = "pending",
    accepted = "accepted",
    denied = "denied"
}


registerEnumType(ReviewsStatus, { name: 'ReviewsStatus', description: undefined })
