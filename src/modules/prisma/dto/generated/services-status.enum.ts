import { registerEnumType } from '@nestjs/graphql';

export enum ServicesStatus {
    pending = "pending",
    completed = "completed",
    cancelled = "cancelled"
}


registerEnumType(ServicesStatus, { name: 'ServicesStatus', description: undefined })
