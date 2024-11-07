import { registerEnumType } from '@nestjs/graphql';

export enum TasksStatus {
    pending = "pending",
    completed = "completed",
    cancelled = "cancelled"
}


registerEnumType(TasksStatus, { name: 'TasksStatus', description: undefined })
