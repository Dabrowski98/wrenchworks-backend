import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopDetailsScalarFieldEnum {
    workshopId = "workshopId",
    rating = "rating",
    workshopName = "workshopName",
    description = "description",
    logoURL = "logoURL",
    status = "status",
    NIP = "NIP",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy",
    deletedAt = "deletedAt"
}


registerEnumType(WorkshopDetailsScalarFieldEnum, { name: 'WorkshopDetailsScalarFieldEnum', description: undefined })
