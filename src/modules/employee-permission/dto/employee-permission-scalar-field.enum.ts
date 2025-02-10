import { registerEnumType } from '@nestjs/graphql';

export enum EmployeePermissionScalarFieldEnum {
    permissionId = "permissionId",
    name = "name",
    description = "description",
    action = "action",
    subject = "subject",
    conditions = "conditions",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EmployeePermissionScalarFieldEnum, { name: 'EmployeePermissionScalarFieldEnum', description: undefined })
