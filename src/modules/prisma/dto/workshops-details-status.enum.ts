import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopsDetailsStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SUSPENDED = "SUSPENDED"
}


registerEnumType(WorkshopsDetailsStatus, { name: 'WorkshopsDetailsStatus', description: undefined })
