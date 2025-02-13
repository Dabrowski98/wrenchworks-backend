import { registerEnumType } from '@nestjs/graphql';

export enum VehicleScalarFieldEnum {
    vehicleId = "vehicleId",
    userId = "userId",
    guestId = "guestId",
    customerId = "customerId",
    modelId = "modelId",
    deletedAt = "deletedAt"
}


registerEnumType(VehicleScalarFieldEnum, { name: 'VehicleScalarFieldEnum', description: undefined })
