import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopDeviceOtpScalarFieldEnum {
    WorkshopDeviceOtpId = "WorkshopDeviceOtpId",
    employeeId = "employeeId",
    workshopId = "workshopId",
    code = "code",
    expiresAt = "expiresAt",
    createdAt = "createdAt"
}


registerEnumType(WorkshopDeviceOtpScalarFieldEnum, { name: 'WorkshopDeviceOtpScalarFieldEnum', description: undefined })
