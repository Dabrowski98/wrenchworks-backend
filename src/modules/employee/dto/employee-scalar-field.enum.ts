import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeScalarFieldEnum {
    employeeId = "employeeId",
    workshopId = "workshopId",
    userId = "userId",
    nickname = "nickname",
    login = "login",
    password = "password",
    refreshToken = "refreshToken",
    status = "status",
    joinedAt = "joinedAt",
    deletedAt = "deletedAt",
    createdAt = "createdAt",
    createdBy = "createdBy",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy"
}


registerEnumType(EmployeeScalarFieldEnum, { name: 'EmployeeScalarFieldEnum', description: undefined })
