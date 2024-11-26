import { registerEnumType } from '@nestjs/graphql';

export enum TasksStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}


registerEnumType(TasksStatus, { name: 'TasksStatus', description: undefined })
