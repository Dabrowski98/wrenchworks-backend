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

import { accessibleBy } from '@casl/prisma';
import { PureAbility } from '@casl/ability';

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

  async jobCategory(
    ability: PureAbility,
    jobId: bigint,
  ): Promise<JobCategory | null> {
    return (
      this.prisma.jobCategory.findFirst({
        where: {
          AND: [
            accessibleBy(ability).JobCategory,
            { jobs: { some: { jobId } } },
          ],
        },
      }) || null
    );
  }

  async serviceRequests(
    ability: PureAbility,
    jobId: bigint,
  ): Promise<ServiceRequest[]> {
    return await this.prisma.serviceRequest.findMany({
      where: {
        AND: [
          accessibleBy(ability).ServiceRequest,
          { jobs: { some: { jobId } } },
        ],
      },
    });
  }

  async workshopJobs(
    ability: PureAbility,
    jobId: bigint,
  ): Promise<WorkshopJob[]> {
    return this.prisma.workshopJob.findMany({
      where: {
        AND: [accessibleBy(ability).WorkshopJob, { jobId }],
      },
    });
  }

  async resolveCount(ability: PureAbility, jobId: bigint): Promise<JobCount> {
    const [workshopJobs, serviceRequests] = await this.prisma.$transaction([
      this.prisma.workshopJob.count({
        where: {
          AND: [accessibleBy(ability).WorkshopJob, { jobId }],
        },
      }),
      this.prisma.serviceRequest.count({
        where: {
          AND: [
            accessibleBy(ability).ServiceRequest,
            { jobs: { some: { jobId } } },
          ],
        },
      }),
    ]);

    return {
      workshopJobs,
      serviceRequests,
    };
  }
}
