import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopScalarFieldEnum {
    workshopId = "workshopId",
    personId = "personId",
    addressId = "addressId",
    email = "email",
    isVerified = "isVerified",
    isManagingWork = "isManagingWork",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(WorkshopScalarFieldEnum, { name: 'WorkshopScalarFieldEnum', description: undefined })
