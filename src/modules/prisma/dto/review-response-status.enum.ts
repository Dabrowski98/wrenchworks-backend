import { registerEnumType } from '@nestjs/graphql';

export enum ReviewResponseStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    HIDDEN = "HIDDEN"
}


registerEnumType(ReviewResponseStatus, { name: 'ReviewResponseStatus', description: "Status of review responses" })
