import { registerEnumType } from '@nestjs/graphql';

export enum ServiceRequestScalarFieldEnum {
    serviceRequestId = "serviceRequestId",
    workshopId = "workshopId",
    vehicleId = "vehicleId",
    personId = "personId",
    requestedAt = "requestedAt",
    status = "status",
    description = "description",
    approvedServiceId = "approvedServiceId",
    deletedAt = "deletedAt"
}


registerEnumType(ServiceRequestScalarFieldEnum, { name: 'ServiceRequestScalarFieldEnum', description: undefined })
