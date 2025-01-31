import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopJobScalarFieldEnum {
    workshopJobId = "workshopJobId",
    workshopId = "workshopId",
    jobId = "jobId",
    workshopJobDescription = "workshopJobDescription",
    minPrice = "minPrice",
    maxPrice = "maxPrice",
    availability = "availability",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy"
}


registerEnumType(WorkshopJobScalarFieldEnum, { name: 'WorkshopJobScalarFieldEnum', description: undefined })
