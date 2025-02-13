import { registerEnumType } from '@nestjs/graphql';

export enum UserReportType {
    OFFENSIVE_CONTENT = "OFFENSIVE_CONTENT",
    HARRASMENT = "HARRASMENT",
    SPAM = "SPAM",
    FAKE_PROFILE = "FAKE_PROFILE",
    PRIVACY_VIOLATION = "PRIVACY_VIOLATION",
    FAKE_WORKSHOP = "FAKE_WORKSHOP",
    VIOLATION_OF_TERMS = "VIOLATION_OF_TERMS",
    FRAUDULENT_ACTIVITY = "FRAUDULENT_ACTIVITY",
    WORKSHOP_IMPERSONATION = "WORKSHOP_IMPERSONATION",
    OTHER = "OTHER"
}


registerEnumType(UserReportType, { name: 'UserReportType', description: "Categories of user reports" })
