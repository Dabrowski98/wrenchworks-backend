import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopDetailsStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SUSPENDED = "SUSPENDED"
}


registerEnumType(WorkshopDetailsStatus, { name: 'WorkshopDetailsStatus', description: "Status of workshop details" })
