import { registerEnumType } from '@nestjs/graphql';

export enum ServiceScalarFieldEnum {
    serviceId = "serviceId",
    serviceRequestId = "serviceRequestId",
    workshopId = "workshopId",
    vehicleId = "vehicleId",
    customerId = "customerId",
    employeeId = "employeeId",
    description = "description",
    status = "status",
    payedOff = "payedOff",
    paymentAmount = "paymentAmount",
    serviceStartDate = "serviceStartDate",
    serviceEndDate = "serviceEndDate",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(ServiceScalarFieldEnum, { name: 'ServiceScalarFieldEnum', description: undefined })
