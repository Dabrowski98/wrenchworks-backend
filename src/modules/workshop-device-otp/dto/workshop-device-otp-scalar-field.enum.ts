import { registerEnumType } from '@nestjs/graphql';

export enum WorkshopDeviceOTPScalarFieldEnum {
    workshopDeviceOTPId = "workshopDeviceOTPId",
    employeeId = "employeeId",
    workshopId = "workshopId",
    code = "code",
    expiresAt = "expiresAt",
    createdAt = "createdAt"
}


registerEnumType(WorkshopDeviceOTPScalarFieldEnum, { name: 'WorkshopDeviceOTPScalarFieldEnum', description: undefined })
