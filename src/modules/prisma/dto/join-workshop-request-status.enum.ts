import { registerEnumType } from '@nestjs/graphql';

export enum JoinWorkshopRequestStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    DENIED = "DENIED"
}


registerEnumType(JoinWorkshopRequestStatus, { name: 'JoinWorkshopRequestStatus', description: undefined })
