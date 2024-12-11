import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopDeviceScalarFieldEnum {
    workshopDeviceId = "workshopDeviceId",
    workshopId = "workshopId",
    serialNumber = "serialNumber",
    deviceName = "deviceName",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    createdBy = "createdBy"
}


registerEnumType(WorkshopDeviceScalarFieldEnum, { name: 'WorkshopDeviceScalarFieldEnum', description: undefined })
