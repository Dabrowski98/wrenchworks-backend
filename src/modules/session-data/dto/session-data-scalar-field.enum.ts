import { registerEnumType } from '@nestjs/graphql';

export enum SessionDataScalarFieldEnum {
    sessionDataId = "sessionDataId",
    userId = "userId",
    refreshToken = "refreshToken",
    deviceInfo = "deviceInfo",
    ipAddress = "ipAddress",
    issuedAt = "issuedAt",
    expiresAt = "expiresAt",
    revoked = "revoked"
}


registerEnumType(SessionDataScalarFieldEnum, { name: 'SessionDataScalarFieldEnum', description: undefined })
