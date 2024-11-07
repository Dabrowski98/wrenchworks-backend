import { registerEnumType } from '@nestjs/graphql';

export enum UserReportScalarFieldEnum {
    reportId = "reportId",
    userId = "userId",
    reportText = "reportText",
    reportedType = "reportedType",
    reportedId = "reportedId",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserReportScalarFieldEnum, { name: 'UserReportScalarFieldEnum', description: undefined })
