import { registerEnumType } from '@nestjs/graphql';

export enum TaskStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}


registerEnumType(TaskStatus, { name: 'TaskStatus', description: "Status of tasks" })
