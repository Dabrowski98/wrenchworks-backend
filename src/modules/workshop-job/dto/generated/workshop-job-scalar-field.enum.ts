import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopJobScalarFieldEnum {
    workshopJobId = "workshopJobId",
    workshopId = "workshopId",
    jobId = "jobId",
    workshopDescription = "workshopDescription",
    minPrice = "minPrice",
    maxPrice = "maxPrice",
    price = "price",
    availability = "availability"
}


registerEnumType(WorkshopJobScalarFieldEnum, { name: 'WorkshopJobScalarFieldEnum', description: undefined })
