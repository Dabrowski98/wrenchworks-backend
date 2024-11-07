import { registerEnumType } from '@nestjs/graphql';

export enum UserReportsReportedType {
    user = "user",
    workshop = "workshop",
    review = "review",
    review_response = "review_response"
}


registerEnumType(UserReportsReportedType, { name: 'UserReportsReportedType', description: undefined })
