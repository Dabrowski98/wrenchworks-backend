import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopDetailsScalarFieldEnum {
    workshopId = "workshopId",
    rating = "rating",
    workshopName = "workshopName",
    description = "description",
    telephoneNumber = "telephoneNumber",
    logoURL = "logoURL",
    status = "status",
    NIP = "NIP",
    deletedAt = "deletedAt"
}


registerEnumType(WorkshopDetailsScalarFieldEnum, { name: 'WorkshopDetailsScalarFieldEnum', description: undefined })
