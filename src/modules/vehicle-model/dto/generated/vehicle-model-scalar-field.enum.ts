import { registerEnumType } from '@nestjs/graphql';

export enum VehicleModelScalarFieldEnum {
    modelId = "modelId",
    modelName = "modelName",
    brandName = "brandName",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(VehicleModelScalarFieldEnum, { name: 'VehicleModelScalarFieldEnum', description: undefined })
