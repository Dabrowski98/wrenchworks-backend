import { registerEnumType } from '@nestjs/graphql';

export enum UserReportReportedEntityType {
    USER = "USER",
    WORKSHOP = "WORKSHOP",
    REVIEW = "REVIEW",
    REVIEW_RESPONSE = "REVIEW_RESPONSE"
}


registerEnumType(UserReportReportedEntityType, { name: 'UserReportReportedEntityType', description: undefined })
