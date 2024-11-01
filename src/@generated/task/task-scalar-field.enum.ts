import { registerEnumType } from '@nestjs/graphql';

export enum TaskScalarFieldEnum {
    taskId = "taskId",
    serviceId = "serviceId",
    jobId = "jobId",
    customName = "customName",
    description = "description",
    status = "status",
    executionTime = "executionTime",
    partsCost = "partsCost"
}


registerEnumType(TaskScalarFieldEnum, { name: 'TaskScalarFieldEnum', description: undefined })
