import { registerEnumType } from '@nestjs/graphql';

export enum ServicesStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}


registerEnumType(ServicesStatus, { name: 'ServicesStatus', description: undefined })
