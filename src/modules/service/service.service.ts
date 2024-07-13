import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateServiceInput, UpdateServiceInput } from './dto/index';

@Injectable()
export class ServiceService {
  constructor(private databaseService: DatabaseService) {}

  async createService(data: CreateServiceInput) {
    return this.databaseService.service.create({
      data: {
        serviceRequestId: data.serviceRequestId,
        workshopId: data.workshopId,
        vehicleId: data.vehicleId,
        customerId: data.customerId,
        employeeId: data.employeeId,
        description: data.description,
        status: data.status,
        payedOff: data.payedOff,
        paymentAmount: data.paymentAmount,
        serviceStartDate: data.serviceStartDate,
        serviceEndDate: data.serviceEndDate,
        updatedAt: data.updatedAt,
        deletedAt: data.deletedAt,
      },
    });
  }

  async updateService(data: UpdateServiceInput) {
    return this.databaseService.service.update({
      where: { serviceId: data.serviceId },
      data: {
        serviceRequestId: data.serviceRequestId,
        workshopId: data.workshopId,
        vehicleId: data.vehicleId,
        customerId: data.customerId,
        employeeId: data.employeeId,
        description: data.description,
        status: data.status,
        payedOff: data.payedOff,
        paymentAmount: data.paymentAmount,
        serviceStartDate: data.serviceStartDate,
        serviceEndDate: data.serviceEndDate,
        updatedAt: data.updatedAt,
        deletedAt: data.deletedAt,
      },
    });
  }

  async findAllServices() {
    return this.databaseService.service.findMany();
  }

  async findServiceById(serviceId: bigint) {
    return this.databaseService.service.findUnique({
      where: { serviceId },
    });
  }

  async deleteService(serviceId: bigint) {
    return this.databaseService.service.delete({
      where: { serviceId },
    });
  }
}
