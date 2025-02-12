import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    userId = "userId",
    username = "username",
    password = "password",
    email = "email",
    telephoneNumber = "telephoneNumber",
    avatarURL = "avatarURL",
    isVerified = "isVerified",
    status = "status",
    firstName = "firstName",
    lastName = "lastName",
    role = "role",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
