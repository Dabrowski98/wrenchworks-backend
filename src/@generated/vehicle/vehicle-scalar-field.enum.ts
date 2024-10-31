import { registerEnumType } from '@nestjs/graphql';

export enum VehicleScalarFieldEnum {
    vehicleId = "vehicleId",
    personId = "personId",
    brandName = "brandName",
    modelId = "modelId",
    deletedAt = "deletedAt"
}


registerEnumType(VehicleScalarFieldEnum, { name: 'VehicleScalarFieldEnum', description: undefined })
