import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeScalarFieldEnum {
    employeeId = "employeeId",
    workshopId = "workshopId",
    joinedAt = "joinedAt",
    deletedAt = "deletedAt",
    permissionSetId = "permissionSetId"
}


registerEnumType(EmployeeScalarFieldEnum, { name: 'EmployeeScalarFieldEnum', description: undefined })
