import { Injectable } from '@nestjs/common';
import {
  CreateOneJobArgs,
  FindUniqueJobArgs,
  FindManyJobArgs,
  UpdateOneJobArgs,
  DeleteOneJobArgs,
  DeleteManyJobArgs,
  Job,
  JobCount,
} from './dto';
import { PrismaService } from 'src/database/prisma.service';
import { JobCategory } from '../job-category/dto/job-category.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { ServiceRequest } from '../service-request/dto/service-request.model';
import { WorkshopJob } from '../workshop-job/dto/workshop-job.model';

@Injectable()
export class JobService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneJobArgs): Promise<Job> {
    return this.prisma.job.create({ data: args.data });
  }

  async findOne(args: FindUniqueJobArgs): Promise<Job> {
    const job = await this.prisma.job.findUnique(args);
    if (!job) throw new RecordNotFoundError(Job);
    return job;
  }

  async findMany(args?: FindManyJobArgs): Promise<Job[]> {
    return this.prisma.job.findMany(args || {});
  }

  async update(args: UpdateOneJobArgs): Promise<Job> {
    return this.prisma.job.update(args);
  }

  async delete(args: DeleteOneJobArgs): Promise<boolean> {
    return this.prisma.job
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }


  // RESOLVE METHODS

  async jobCategory(jobId: bigint): Promise<JobCategory | null> {
    return (
      await this.prisma.job.findUnique({
        where: { jobId },
        include: { jobCategory: true },
      })
    ).jobCategory;
  }

  async serviceRequests(jobId: bigint): Promise<ServiceRequest[]> {
    return (
      await this.prisma.job.findUnique({
        where: { jobId },
        include: { serviceRequests: true },
      })
    ).serviceRequests;
  }

  async jobWorkshops(jobId: bigint): Promise<WorkshopJob[]> {
    return (
      await this.prisma.job.findUnique({
        where: { jobId },
        include: { jobWorkshops: true },
      })
    ).jobWorkshops;
  }

  async resolveCount(jobId: bigint): Promise<JobCount> {
    return {
      serviceRequests: await this.prisma.serviceRequest.count({
        where: { jobs: { some: { jobId } } },
      }),
      jobWorkshops: await this.prisma.workshopJob.count({
        where: { jobId },
      }),
    };
  }
}
