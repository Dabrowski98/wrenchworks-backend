import { registerEnumType } from '@nestjs/graphql';

export enum ServiceRequestStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    CANCELLED = "CANCELLED"
}


registerEnumType(ServiceRequestStatus, { name: 'ServiceRequestStatus', description: undefined })
