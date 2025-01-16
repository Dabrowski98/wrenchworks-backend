import { registerEnumType } from '@nestjs/graphql';

export enum UserReportStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    CLOSED_CONFIRMED = "CLOSED_CONFIRMED",
    CLOSED_REJECTED = "CLOSED_REJECTED"
}


registerEnumType(UserReportStatus, { name: 'UserReportStatus', description: undefined })
