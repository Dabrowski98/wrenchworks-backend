import { registerEnumType } from '@nestjs/graphql';

export enum UsersStatus {
    active = "active",
    suspended = "suspended"
}


registerEnumType(UsersStatus, { name: 'UsersStatus', description: undefined })
