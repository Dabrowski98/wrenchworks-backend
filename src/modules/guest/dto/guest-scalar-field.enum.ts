import { registerEnumType } from '@nestjs/graphql';

export enum GuestScalarFieldEnum {
    guestId = "guestId",
    firstName = "firstName",
    telephoneNumber = "telephoneNumber",
    email = "email",
    NIP = "NIP",
    companyName = "companyName"
}


registerEnumType(GuestScalarFieldEnum, { name: 'GuestScalarFieldEnum', description: undefined })
