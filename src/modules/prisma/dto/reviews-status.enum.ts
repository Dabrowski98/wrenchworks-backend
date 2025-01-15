import { registerEnumType } from '@nestjs/graphql';

export enum ReviewsStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED"
}


registerEnumType(ReviewsStatus, { name: 'ReviewsStatus', description: undefined })
