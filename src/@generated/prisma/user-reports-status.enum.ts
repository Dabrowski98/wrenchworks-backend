import { registerEnumType } from '@nestjs/graphql';

export enum UserReportsStatus {
    pending = "pending",
    considered = "considered",
    closed = "closed"
}


registerEnumType(UserReportsStatus, { name: 'UserReportsStatus', description: undefined })
