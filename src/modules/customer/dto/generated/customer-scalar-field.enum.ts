import { registerEnumType } from '@nestjs/graphql';

export enum CustomerScalarFieldEnum {
    customerId = "customerId",
    workshopId = "workshopId",
    totalDue = "totalDue",
    description = "description",
    deletedAt = "deletedAt",
    NIP = "NIP",
    companyName = "companyName"
}


registerEnumType(CustomerScalarFieldEnum, { name: 'CustomerScalarFieldEnum', description: undefined })
