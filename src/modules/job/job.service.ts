import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateJobInput, UpdateJobInput } from './dto/index';

@Injectable()
export class JobService {
  constructor(private databaseService: DatabaseService) {}

  async createJob(data: CreateJobInput) {
    return this.databaseService.job.create({
      data: {
        name: data.name,
        description: data.description,
        isPopular: data.isPopular,
        categoryId: data.categoryId,
      },
    });
  }

  async updateJob(data: UpdateJobInput) {
    return this.databaseService.job.update({
      where: { jobId: data.jobId },
      data: {
        name: data.name,
        description: data.description,
        isPopular: data.isPopular,
        categoryId: data.categoryId,
      },
    });
  }

  async findAllJobs() {
    return this.databaseService.job.findMany();
  }

  async findJobById(jobId: bigint) {
    return this.databaseService.job.findUnique({
      where: { jobId },
    });
  }

  async deleteJob(jobId: bigint) {
    return this.databaseService.job.delete({
      where: { jobId },
    });
  }
}
