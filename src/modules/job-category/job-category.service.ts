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
import { accessibleBy } from '@casl/prisma';
import { PureAbility } from '@casl/ability';

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

  async parent(
    ability: PureAbility,
    categoryId: bigint,
  ): Promise<JobCategory | null> {
    return (
      this.prisma.jobCategory.findFirst({
        where: { AND: [accessibleBy(ability).JobCategory, { categoryId }] },
      }) || null
    );
  }

  async children(
    ability: PureAbility,
    categoryId: bigint,
  ): Promise<JobCategory[]> {
    return await this.prisma.jobCategory.findMany({
      where: {
        AND: [accessibleBy(ability).JobCategory, { parentId: categoryId }],
      },
    });
  }

  async jobs(ability: PureAbility, categoryId: bigint): Promise<Job[]> {
    return await this.prisma.job.findMany({
      where: {
        AND: [accessibleBy(ability).Job, { jobCategory: { categoryId } }],
      },
    });
  }

  async workshops(
    ability: PureAbility,
    categoryId: bigint,
  ): Promise<Workshop[]> {
    return await this.prisma.workshop.findMany({
      where: {
        AND: [
          accessibleBy(ability).Workshop,
          { jobCategories: { some: { categoryId } } },
        ],
      },
    });
  }

  async resolveCount(
    ability: PureAbility,
    categoryId: bigint,
  ): Promise<JobCategoryCount> {
    const counts = await this.prisma.$transaction([
      this.prisma.jobCategory.count({
        where: { AND: [accessibleBy(ability).JobCategory, { categoryId }] },
      }),
      this.prisma.job.count({
        where: {
          AND: [accessibleBy(ability).Job, { jobCategory: { categoryId } }],
        },
      }),
      this.prisma.workshop.count({
        where: {
          AND: [
            accessibleBy(ability).Workshop,
            { jobCategories: { some: { categoryId } } },
          ],
        },
      }),
    ]);

    const [children, jobs, workshops] = counts;

    return {
      children,
      jobs,
      workshops,
    };
  }
}
