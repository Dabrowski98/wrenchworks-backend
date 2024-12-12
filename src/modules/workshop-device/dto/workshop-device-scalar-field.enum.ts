import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopDeviceScalarFieldEnum {
    workshopDeviceId = "workshopDeviceId",
    workshopId = "workshopId",
    serialNumber = "serialNumber",
    deviceName = "deviceName",
    lastLoginAt = "lastLoginAt",
    lastLoginBy = "lastLoginBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy",
    acceptedAt = "acceptedAt",
    acceptedBy = "acceptedBy"
}


registerEnumType(WorkshopDeviceScalarFieldEnum, { name: 'WorkshopDeviceScalarFieldEnum', description: undefined })
