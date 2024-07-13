import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreatePermissionSetInput, UpdatePermissionSetInput } from './dto';

@Injectable()
export class PermissionSetService {
  constructor(private databaseService: DatabaseService) {}

  async createPermissionSet(data: CreatePermissionSetInput) {
    return this.databaseService.permissionSet.create({
      data: {
        workshopId: data.workshopId,
        setName: data.setName,
        canReadWorkshopDetails: data.canReadWorkshopDetails,
        canUpdateWorkshopDetails: data.canUpdateWorkshopDetails,
        canModifyWorkshopDetails: data.canModifyWorkshopDetails,
        canReadEmployees: data.canReadEmployees,
        canUpdateEmployees: data.canUpdateEmployees,
        canModifyEmployees: data.canModifyEmployees,
        canReadCustomers: data.canReadCustomers,
        canUpdateCustomers: data.canUpdateCustomers,
        canModifyCustomers: data.canModifyCustomers,
        canReadServices: data.canReadServices,
        canUpdateServices: data.canUpdateServices,
        canModifyServices: data.canModifyServices,
        canReadTasks: data.canReadTasks,
        canUpdateTasks: data.canUpdateTasks,
        canModifyTasks: data.canModifyTasks,
        canReadReports: data.canReadReports,
        canGenerateReports: data.canGenerateReports,
        canModifyPermissions: data.canModifyPermissions,
      },
    });
  }

  async updatePermissionSet(data: UpdatePermissionSetInput) {
    return this.databaseService.permissionSet.update({
      where: { permissionSetId: data.permissionSetId },
      data: {
        workshopId: data.workshopId,
        setName: data.setName,
        canReadWorkshopDetails: data.canReadWorkshopDetails,
        canUpdateWorkshopDetails: data.canUpdateWorkshopDetails,
        canModifyWorkshopDetails: data.canModifyWorkshopDetails,
        canReadEmployees: data.canReadEmployees,
        canUpdateEmployees: data.canUpdateEmployees,
        canModifyEmployees: data.canModifyEmployees,
        canReadCustomers: data.canReadCustomers,
        canUpdateCustomers: data.canUpdateCustomers,
        canModifyCustomers: data.canModifyCustomers,
        canReadServices: data.canReadServices,
        canUpdateServices: data.canUpdateServices,
        canModifyServices: data.canModifyServices,
        canReadTasks: data.canReadTasks,
        canUpdateTasks: data.canUpdateTasks,
        canModifyTasks: data.canModifyTasks,
        canReadReports: data.canReadReports,
        canGenerateReports: data.canGenerateReports,
        canModifyPermissions: data.canModifyPermissions,
      },
    });
  }

  async findAllPermissionSets() {
    return this.databaseService.permissionSet.findMany();
  }

  async findPermissionSetById(permissionSetId: bigint) {
    return this.databaseService.permissionSet.findUnique({
      where: { permissionSetId },
    });
  }

  async deletePermissionSet(permissionSetId: bigint) {
    return this.databaseService.permissionSet.delete({
      where: { permissionSetId },
    });
  }
}
