import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopScalarFieldEnum {
    workshopId = "workshopId",
    ownerId = "ownerId",
    addressId = "addressId",
    email = "email",
    telephoneNumber = "telephoneNumber",
    isVerified = "isVerified",
    isManagingWork = "isManagingWork",
    isOfferingService = "isOfferingService",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy",
    deletedAt = "deletedAt"
}


registerEnumType(WorkshopScalarFieldEnum, { name: 'WorkshopScalarFieldEnum', description: undefined })
