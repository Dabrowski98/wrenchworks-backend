import { registerEnumType } from '@nestjs/graphql';

export enum SessionDataScalarFieldEnum {
    sessionDataId = "sessionDataId",
    userId = "userId",
    refreshToken = "refreshToken",
    deviceId = "deviceId",
    deviceName = "deviceName",
    deviceInfo = "deviceInfo",
    ipAddress = "ipAddress",
    deviceSerialNumber = "deviceSerialNumber",
    issuedAt = "issuedAt",
    expiresAt = "expiresAt"
}


registerEnumType(SessionDataScalarFieldEnum, { name: 'SessionDataScalarFieldEnum', description: undefined })
