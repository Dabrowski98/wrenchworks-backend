import { registerEnumType } from '@nestjs/graphql';

export enum CustomerScalarFieldEnum {
    customerId = "customerId",
    workshopId = "workshopId",
    userId = "userId",
    guestId = "guestId",
    firstName = "firstName",
    creationSource = "creationSource",
    telephoneNumber = "telephoneNumber",
    email = "email",
    isVerified = "isVerified",
    totalDue = "totalDue",
    description = "description",
    NIP = "NIP",
    companyName = "companyName",
    deletedAt = "deletedAt",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy"
}


registerEnumType(CustomerScalarFieldEnum, { name: 'CustomerScalarFieldEnum', description: undefined })
