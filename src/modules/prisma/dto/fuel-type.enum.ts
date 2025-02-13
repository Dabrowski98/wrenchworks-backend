import { registerEnumType } from '@nestjs/graphql';

export enum FuelType {
    PETROL = "PETROL",
    DIESEL = "DIESEL",
    ELECTRIC = "ELECTRIC",
    HYBRID = "HYBRID",
    ROCKET = "ROCKET",
    LPG = "LPG",
    CNG = "CNG",
    OTHER = "OTHER"
}


registerEnumType(FuelType, { name: 'FuelType', description: "Types of fuel used by vehicles" })
