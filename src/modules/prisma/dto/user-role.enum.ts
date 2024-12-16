import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
    USER = "USER",
    MODERATOR = "MODERATOR",
    ADMIN = "ADMIN",
    SUPERADMIN = "SUPERADMIN"
}


registerEnumType(UserRole, { name: 'UserRole', description: undefined })
