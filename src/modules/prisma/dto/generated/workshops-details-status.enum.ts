import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopsDetailsStatus {
    active = "active",
    suspended = "suspended"
}


registerEnumType(WorkshopsDetailsStatus, { name: 'WorkshopsDetailsStatus', description: undefined })
