import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopJobCategoryScalarFieldEnum {
    workshopId = "workshopId",
    categoryId = "categoryId",
    createdAt = "createdAt"
}


registerEnumType(WorkshopJobCategoryScalarFieldEnum, { name: 'WorkshopJobCategoryScalarFieldEnum', description: undefined })
