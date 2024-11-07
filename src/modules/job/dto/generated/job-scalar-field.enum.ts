import { registerEnumType } from '@nestjs/graphql';

export enum JobScalarFieldEnum {
    jobId = "jobId",
    categoryId = "categoryId",
    name = "name",
    description = "description",
    isPopular = "isPopular"
}


registerEnumType(JobScalarFieldEnum, { name: 'JobScalarFieldEnum', description: undefined })
