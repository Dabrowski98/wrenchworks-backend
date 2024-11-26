import { registerEnumType } from '@nestjs/graphql';

export enum ServiceRequestScalarFieldEnum {
    serviceRequestId = "serviceRequestId",
    workshopId = "workshopId",
    vehicleId = "vehicleId",
    userId = "userId",
    guestId = "guestId",
    approvedServiceId = "approvedServiceId",
    status = "status",
    description = "description",
    createdAt = "createdAt",
    resolvedAt = "resolvedAt",
    resolvedBy = "resolvedBy",
    deletedAt = "deletedAt"
}


registerEnumType(ServiceRequestScalarFieldEnum, { name: 'ServiceRequestScalarFieldEnum', description: undefined })
