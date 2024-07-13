import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateServiceRequestInput, UpdateServiceRequestInput } from './dto/index';

@Injectable()
export class ServiceRequestService {
  constructor(private databaseService: DatabaseService) {}

  async createServiceRequest(data: CreateServiceRequestInput) {
    return this.databaseService.serviceRequest.create({
      data: {
        workshopId: data.workshopId,
        vehicleId: data.vehicleId,
        personId: data.personId,
        description: data.description,
      },
    });
  }

  async updateServiceRequest(data: UpdateServiceRequestInput) {
    return this.databaseService.serviceRequest.update({
      where: { serviceRequestId: data.serviceRequestId },
      data: {
        workshopId: data.workshopId,
        vehicleId: data.vehicleId,
        personId: data.personId,
        description: data.description,
        status: data.status,
        approvedServiceId: data.approvedServiceId,
        deletedAt: data.deletedAt,
      },
    });
  }

  async findAllServiceRequests() {
    return this.databaseService.serviceRequest.findMany();
  }

  async findServiceRequestById(serviceRequestId: bigint) {
    return this.databaseService.serviceRequest.findUnique({
      where: { serviceRequestId },
    });
  }

  async deleteServiceRequest(serviceRequestId: bigint) {
    return this.databaseService.serviceRequest.delete({
      where: { serviceRequestId },
    });
  }
}
