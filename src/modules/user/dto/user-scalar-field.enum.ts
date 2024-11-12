import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    userId = "userId",
    personId = "personId",
    username = "username",
    password = "password",
    email = "email",
    avatarURL = "avatarURL",
    isVerified = "isVerified",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
