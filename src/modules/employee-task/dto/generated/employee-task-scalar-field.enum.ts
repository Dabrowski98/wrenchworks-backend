import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeTaskScalarFieldEnum {
    taskId = "taskId",
    employeeId = "employeeId",
    workshopId = "workshopId",
    createdAt = "createdAt"
}


registerEnumType(EmployeeTaskScalarFieldEnum, { name: 'EmployeeTaskScalarFieldEnum', description: undefined })
