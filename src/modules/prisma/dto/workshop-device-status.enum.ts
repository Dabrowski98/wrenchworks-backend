import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopDeviceStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    DISABLED = "DISABLED"
}


registerEnumType(WorkshopDeviceStatus, { name: 'WorkshopDeviceStatus', description: undefined })
