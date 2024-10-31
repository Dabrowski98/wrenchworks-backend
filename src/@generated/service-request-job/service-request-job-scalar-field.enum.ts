import { registerEnumType } from '@nestjs/graphql';

export enum ServiceRequestJobScalarFieldEnum {
    serviceRequestId = "serviceRequestId",
    jobId = "jobId",
    createdAt = "createdAt"
}


registerEnumType(ServiceRequestJobScalarFieldEnum, { name: 'ServiceRequestJobScalarFieldEnum', description: undefined })
