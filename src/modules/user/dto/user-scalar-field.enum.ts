import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    userId = "userId",
    username = "username",
    password = "password",
    email = "email",
    avatarURL = "avatarURL",
    isVerified = "isVerified",
    status = "status",
    firstName = "firstName",
    lastName = "lastName",
    telephoneNumber = "telephoneNumber",
    addressId = "addressId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
