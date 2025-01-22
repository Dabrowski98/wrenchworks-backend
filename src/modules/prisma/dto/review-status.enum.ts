import { registerEnumType } from '@nestjs/graphql';

export enum ReviewStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    HIDDEN = "HIDDEN"
}


registerEnumType(ReviewStatus, { name: 'ReviewStatus', description: undefined })
