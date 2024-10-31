import { registerEnumType } from '@nestjs/graphql';

export enum ServiceRequestsStatus {
    pending = "pending",
    accepted = "accepted",
    rejected = "rejected"
}


registerEnumType(ServiceRequestsStatus, { name: 'ServiceRequestsStatus', description: undefined })
