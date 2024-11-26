import { registerEnumType } from '@nestjs/graphql';

export enum UserReportsReportedEntityType {
    USER = "USER",
    WORKSHOP = "WORKSHOP",
    REVIEW = "REVIEW",
    REVIEW_RESPONSE = "REVIEW_RESPONSE",
    SERVICE = "SERVICE",
    SERVICE_REQUEST = "SERVICE_REQUEST"
}


registerEnumType(UserReportsReportedEntityType, { name: 'UserReportsReportedEntityType', description: undefined })
