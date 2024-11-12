import { registerEnumType } from '@nestjs/graphql';

export enum FuelType {
    petrol = "petrol",
    diesel = "diesel",
    electric = "electric",
    hybrid = "hybrid",
    rocket = "rocket",
    LPG = "LPG",
    CNG = "CNG",
    other = "other"
}


registerEnumType(FuelType, { name: 'FuelType', description: undefined })
