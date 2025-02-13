import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopDeviceStatus {
    ENABLED = "ENABLED",
    INACTIVE = "INACTIVE",
    DISABLED = "DISABLED"
}


registerEnumType(WorkshopDeviceStatus, { name: 'WorkshopDeviceStatus', description: undefined })
