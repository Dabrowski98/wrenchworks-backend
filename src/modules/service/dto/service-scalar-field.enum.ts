import { registerEnumType } from '@nestjs/graphql';

export enum ServiceScalarFieldEnum {
    serviceId = "serviceId",
    serviceRequestId = "serviceRequestId",
    workshopId = "workshopId",
    vehicleId = "vehicleId",
    customerId = "customerId",
    employeeId = "employeeId",
    description = "description",
    serviceDescription = "serviceDescription",
    status = "status",
    payedOff = "payedOff",
    paymentAmount = "paymentAmount",
    serviceStartDate = "serviceStartDate",
    serviceEndDate = "serviceEndDate",
    addedAt = "addedAt",
    addedBy = "addedBy",
    resolvedAt = "resolvedAt",
    resolvedBy = "resolvedBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy",
    deletedAt = "deletedAt"
}


registerEnumType(ServiceScalarFieldEnum, { name: 'ServiceScalarFieldEnum', description: undefined })
