import { registerEnumType } from '@nestjs/graphql';

export enum AddressScalarFieldEnum {
    addressId = "addressId",
    country = "country",
    region = "region",
    city = "city",
    street = "street",
    buildingNo = "buildingNo",
    flatNo = "flatNo",
    postCode = "postCode"
}


registerEnumType(AddressScalarFieldEnum, { name: 'AddressScalarFieldEnum', description: undefined })
