import { registerEnumType } from '@nestjs/graphql';

export enum VehicleModelScalarFieldEnum {
    modelId = "modelId",
    modelName = "modelName",
    brand = "brand",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(VehicleModelScalarFieldEnum, { name: 'VehicleModelScalarFieldEnum', description: undefined })
