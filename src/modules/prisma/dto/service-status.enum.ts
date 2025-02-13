import { registerEnumType } from '@nestjs/graphql';

export enum ServiceStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}


registerEnumType(ServiceStatus, { name: 'ServiceStatus', description: "Status of services" })
