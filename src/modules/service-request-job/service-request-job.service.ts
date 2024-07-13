import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateServiceRequestJobInput, UpdateServiceRequestJobInput } from './dto/index';

@Injectable()
export class ServiceRequestJobService {
  constructor(private databaseService: DatabaseService) {}

  async createServiceRequestJob(data: CreateServiceRequestJobInput) {
    return this.databaseService.serviceRequestJob.create({
      data: {
        serviceRequestId: data.serviceRequestId,
        jobId: data.jobId,
      },
    });
  }

  async updateServiceRequestJob(data: UpdateServiceRequestJobInput) {
    return this.databaseService.serviceRequestJob.update({
      where: {
        serviceRequestId_jobId: {
          serviceRequestId: data.serviceRequestId,
          jobId: data.jobId,
        },
      },
      data: {
        createdAt: data.createdAt,
      },
    });
  }

  async findAllServiceRequestJobs() {
    return this.databaseService.serviceRequestJob.findMany();
  }

  async findServiceRequestJobById(serviceRequestId: bigint, jobId: bigint) {
    return this.databaseService.serviceRequestJob.findUnique({
      where: {
        serviceRequestId_jobId: {
          serviceRequestId,
          jobId,
        },
      },
    });
  }

  async deleteServiceRequestJob(serviceRequestId: bigint, jobId: bigint) {
    return this.databaseService.serviceRequestJob.delete({
      where: {
        serviceRequestId_jobId: {
          serviceRequestId,
          jobId,
        },
      },
    });
  }
}
