import { registerEnumType } from '@nestjs/graphql';

export enum JoinWorkshopRequestStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED"
}


registerEnumType(JoinWorkshopRequestStatus, { name: 'JoinWorkshopRequestStatus', description: "Status of workshop join requests" })
