import { registerEnumType } from '@nestjs/graphql';

export enum AddressWorkshopScalarFieldEnum {
    addressId = "addressId",
    workshopId = "workshopId",
    createdAt = "createdAt"
}


registerEnumType(AddressWorkshopScalarFieldEnum, { name: 'AddressWorkshopScalarFieldEnum', description: undefined })
