import { registerEnumType } from '@nestjs/graphql';

export enum VehicleDetailsScalarFieldEnum {
    vehicleDetailsId = "vehicleDetailsId",
    vehicleId = "vehicleId",
    yearOfProduction = "yearOfProduction",
    VIN = "VIN",
    engineCapacity = "engineCapacity",
    countryOfRegistration = "countryOfRegistration",
    licensePlate = "licensePlate",
    fuelType = "fuelType",
    engineNo = "engineNo",
    bodyColor = "bodyColor",
    deletedAt = "deletedAt"
}


registerEnumType(VehicleDetailsScalarFieldEnum, { name: 'VehicleDetailsScalarFieldEnum', description: undefined })
