import { Injectable } from '@nestjs/common';
import {
  CreateOneJobCategoryArgs,
  FindUniqueJobCategoryArgs,
  FindManyJobCategoryArgs,
  UpdateOneJobCategoryArgs,
  DeleteOneJobCategoryArgs,
  JobCategory,
  JobCategoryCount,
} from './dto';
import { PrismaService } from 'src/database/prisma.service';
import { Job } from '../job/dto/job.model';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Workshop } from '../workshop/dto/workshop.model';

@Injectable()
export class JobCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneJobCategoryArgs): Promise<JobCategory> {
    return this.prisma.jobCategory.create({ data: args.data });
  }

  async findOne(args: FindUniqueJobCategoryArgs): Promise<JobCategory> {
    const jobCategory = await this.prisma.jobCategory.findUnique(args);
    if (!jobCategory) throw new RecordNotFoundError(JobCategory);
    return jobCategory;
  }

  async findMany(args?: FindManyJobCategoryArgs): Promise<JobCategory[]> {
    return this.prisma.jobCategory.findMany(args || {});
  }

  async update(args: UpdateOneJobCategoryArgs): Promise<JobCategory> {
    return this.prisma.jobCategory.update(args);
  }

  async delete(args: DeleteOneJobCategoryArgs): Promise<boolean> {
    return this.prisma.jobCategory
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async parent(categoryId: bigint): Promise<JobCategory | null> {
    return (
      await this.prisma.jobCategory.findUnique({
        where: { categoryId },
        include: { parent: true },
      })
    ).parent;
  }

  async children(categoryId: bigint): Promise<JobCategory[]> {
    return (
      await this.prisma.jobCategory.findUnique({
        where: { categoryId },
        include: { children: true },
      })
    ).children;
  }

  async jobs(categoryId: bigint): Promise<Job[]> {
    return (
      await this.prisma.jobCategory.findUnique({
        where: { categoryId },
        include: { jobs: true },
      })
    ).jobs;
  }

  async workshops(categoryId: bigint): Promise<Workshop[]> {
    return (
      await this.prisma.jobCategory.findUnique({
        where: { categoryId },
        include: { workshops: true },
      })
    ).workshops;
  }

  async resolveCount(categoryId: bigint): Promise<JobCategoryCount> {
    return {
      children: await this.prisma.jobCategory.count({ where: { categoryId } }),
      jobs: await this.prisma.job.count({
        where: { jobCategory: { categoryId } },
      }),
      workshops: await this.prisma.workshop.count({
        where: { jobCategories: { some: { categoryId } } },
      }),
    };
  }
}
