import { registerEnumType } from '@nestjs/graphql';

export enum VehicleBrandScalarFieldEnum {
    brandName = "brandName",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(VehicleBrandScalarFieldEnum, { name: 'VehicleBrandScalarFieldEnum', description: undefined })
