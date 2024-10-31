import { registerEnumType } from '@nestjs/graphql';

export enum AddressPersonScalarFieldEnum {
    addressId = "addressId",
    personId = "personId",
    createdAt = "createdAt"
}


registerEnumType(AddressPersonScalarFieldEnum, { name: 'AddressPersonScalarFieldEnum', description: undefined })
