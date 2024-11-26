import { registerEnumType } from '@nestjs/graphql';

export enum PermissionSetScalarFieldEnum {
    permissionSetId = "permissionSetId",
    workshopId = "workshopId",
    setName = "setName",
    canReadWorkshopDetails = "canReadWorkshopDetails",
    canUpdateWorkshopDetails = "canUpdateWorkshopDetails",
    canModifyWorkshopDetails = "canModifyWorkshopDetails",
    canReadEmployees = "canReadEmployees",
    canUpdateEmployees = "canUpdateEmployees",
    canModifyEmployees = "canModifyEmployees",
    canReadCustomers = "canReadCustomers",
    canUpdateCustomers = "canUpdateCustomers",
    canModifyCustomers = "canModifyCustomers",
    canReadServices = "canReadServices",
    canUpdateServices = "canUpdateServices",
    canModifyServices = "canModifyServices",
    canReadTasks = "canReadTasks",
    canUpdateTasks = "canUpdateTasks",
    canModifyTasks = "canModifyTasks",
    canReadReports = "canReadReports",
    canGenerateReports = "canGenerateReports",
    canModifyPermissions = "canModifyPermissions",
    updatedAt = "updatedAt",
    updatedBy = "updatedBy"
}


registerEnumType(PermissionSetScalarFieldEnum, { name: 'PermissionSetScalarFieldEnum', description: undefined })
