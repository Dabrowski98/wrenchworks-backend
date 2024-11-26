import { registerEnumType } from '@nestjs/graphql';

export enum UsersStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SUSPENDED = "SUSPENDED"
}


registerEnumType(UsersStatus, { name: 'UsersStatus', description: undefined })
