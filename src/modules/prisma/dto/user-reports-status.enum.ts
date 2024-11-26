import { registerEnumType } from '@nestjs/graphql';

export enum UserReportsStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    CLOSED_CONFIRMED = "CLOSED_CONFIRMED",
    CLOSED_DENIED = "CLOSED_DENIED"
}


registerEnumType(UserReportsStatus, { name: 'UserReportsStatus', description: undefined })
