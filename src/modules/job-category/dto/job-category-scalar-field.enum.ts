import { registerEnumType } from '@nestjs/graphql';

export enum JobCategoryScalarFieldEnum {
    categoryId = "categoryId",
    name = "name",
    parentId = "parentId",
    description = "description",
    isPopular = "isPopular"
}


registerEnumType(JobCategoryScalarFieldEnum, { name: 'JobCategoryScalarFieldEnum', description: undefined })
