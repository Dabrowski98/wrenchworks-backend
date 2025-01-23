import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  CreateOneWorkshopJobArgs,
  DeleteOneWorkshopJobArgs,
  FindManyWorkshopJobArgs,
  FindUniqueWorkshopJobArgs,
  UpdateOneWorkshopJobArgs,
  WorkshopJob,
  WorkshopJobCount,
} from './dto'; 
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Task } from '../task/dto';
import { Job } from '../job/dto';
import { Workshop } from '../workshop/dto';

@Injectable()
export class WorkshopJobService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneWorkshopJobArgs): Promise<WorkshopJob> {
    return this.prisma.workshopJob.create({
      data: {
        ...args.data,
      },
    });
  }

  async findOne(args: FindUniqueWorkshopJobArgs): Promise<WorkshopJob> {
    const workshopJob = await this.prisma.workshopJob.findUnique(args);
    if (!workshopJob) throw new RecordNotFoundError(WorkshopJob);
    return workshopJob;
  }

  async findMany(args: FindManyWorkshopJobArgs): Promise<WorkshopJob[]> {
    return this.prisma.workshopJob.findMany(args);
  }

  async update(args: UpdateOneWorkshopJobArgs): Promise<WorkshopJob> {
    return this.prisma.workshopJob.update({
      data: { ...args.data },
      where: args.where,
    });
  }

  async delete(args: DeleteOneWorkshopJobArgs): Promise<boolean> {
    return await this.prisma.workshopJob
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async tasks(workshopJobId: bigint): Promise<Task[]> {
    return (
      await this.prisma.workshopJob.findUnique({
        where: { workshopJobId },
        include: { tasks: true },
      })
    ).tasks;
  }

  async job(workshopJobId: bigint): Promise<Job> {
    return (
      await this.prisma.workshopJob.findUnique({
        where: { workshopJobId },
        include: { job: true },
      })
    ).job;
  }

  async workshop(workshopJobId: bigint): Promise<Workshop> {
    return (
      await this.prisma.workshopJob.findUnique({
        where: { workshopJobId },
        include: { workshop: true },
      })
    ).workshop;
  }

  async resolveCount(workshopJobId: bigint): Promise<WorkshopJobCount> {
    return {
      tasks: await this.prisma.task.count({
        where: { workshopJobId },
      }),
    };
  }
}
