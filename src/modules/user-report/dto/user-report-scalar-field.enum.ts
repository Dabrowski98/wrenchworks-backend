import { registerEnumType } from '@nestjs/graphql';

export enum UserReportScalarFieldEnum {
    reportId = "reportId",
    userId = "userId",
    reportText = "reportText",
    reportType = "reportType",
    reportedEntityType = "reportedEntityType",
    reportedId = "reportedId",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy"
}


registerEnumType(UserReportScalarFieldEnum, { name: 'UserReportScalarFieldEnum', description: undefined })
