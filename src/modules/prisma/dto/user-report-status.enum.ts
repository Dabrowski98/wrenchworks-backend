import { registerEnumType } from '@nestjs/graphql';

export enum UserReportStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    CLOSED = "CLOSED"
}


registerEnumType(UserReportStatus, { name: 'UserReportStatus', description: "Status of user reports" })
