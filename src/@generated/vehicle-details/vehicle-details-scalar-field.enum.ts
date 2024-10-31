import { registerEnumType } from '@nestjs/graphql';

export enum VehicleDetailsScalarFieldEnum {
    vehicleId = "vehicleId",
    yearOfProduction = "yearOfProduction",
    VIN = "VIN",
    engineCapacity = "engineCapacity",
    licensePlate = "licensePlate",
    fuelType = "fuelType",
    engineNo = "engineNo",
    bodyColor = "bodyColor",
    deletedAt = "deletedAt"
}


registerEnumType(VehicleDetailsScalarFieldEnum, { name: 'VehicleDetailsScalarFieldEnum', description: undefined })
