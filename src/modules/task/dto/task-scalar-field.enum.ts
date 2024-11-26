import { registerEnumType } from '@nestjs/graphql';

export enum TaskScalarFieldEnum {
    taskId = "taskId",
    serviceId = "serviceId",
    workshopJobId = "workshopJobId",
    customName = "customName",
    description = "description",
    status = "status",
    executionTime = "executionTime",
    partsCost = "partsCost",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy",
    resolvedAt = "resolvedAt",
    resolvedBy = "resolvedBy"
}


registerEnumType(TaskScalarFieldEnum, { name: 'TaskScalarFieldEnum', description: undefined })
