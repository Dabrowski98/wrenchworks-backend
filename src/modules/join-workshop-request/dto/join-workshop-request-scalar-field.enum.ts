import { registerEnumType } from '@nestjs/graphql';

export enum JoinWorkshopRequestScalarFieldEnum {
    joinWorkshopRequestId = "joinWorkshopRequestId",
    receiverId = "receiverId",
    workshopId = "workshopId",
    employeeId = "employeeId",
    message = "message",
    status = "status",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy",
    resolvedAt = "resolvedAt"
}


registerEnumType(JoinWorkshopRequestScalarFieldEnum, { name: 'JoinWorkshopRequestScalarFieldEnum', description: undefined })
