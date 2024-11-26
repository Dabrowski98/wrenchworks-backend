import { registerEnumType } from '@nestjs/graphql';

export enum ReviewsStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    DENIED = "DENIED"
}


registerEnumType(ReviewsStatus, { name: 'ReviewsStatus', description: undefined })
