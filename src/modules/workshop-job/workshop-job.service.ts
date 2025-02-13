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
  DeleteManyWorkshopJobArgs,
} from './dto';
import {
  BadRequestError,
  RecordNotFoundError,
} from 'src/common/custom-errors/errors.config';
import { Task } from '../task/dto';
import { Job } from '../job/dto';
import { Workshop } from '../workshop/dto';
import { ForbiddenError, subject } from '@casl/ability';
import { AbilityFactory, accessibleBy, Action } from '../ability';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';

@Injectable()
export class WorkshopJobService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: CreateOneWorkshopJobArgs,
  ): Promise<WorkshopJob> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const workshop = await this.prisma.workshop.findUnique({
      where: { workshopId: args.data.workshop.connect.workshopId },
      include: { workshopJobs: true },
    });

    if (
      workshop.workshopJobs.some((workshopJob) => {
        workshopJob.jobId === args.data.job.connect.jobId;
      })
    )
      throw new BadRequestError('Workshop already has this job in offer.');

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('WorkshopJob', { workshop } as any),
    );
    return this.prisma.workshopJob.create(args);
  }

  async findOne(args: FindUniqueWorkshopJobArgs): Promise<WorkshopJob> {
    const workshopJob = await this.prisma.workshopJob.findUnique(args);
    if (!workshopJob) throw new RecordNotFoundError(WorkshopJob);
    return workshopJob;
  }

  async findMany(args?: FindManyWorkshopJobArgs): Promise<WorkshopJob[]> {
    return this.prisma.workshopJob.findMany(args || {});
  }

  async update(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: UpdateOneWorkshopJobArgs,
  ): Promise<WorkshopJob> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const workshopJob = await this.prisma.workshopJob.findUnique({
      where: args.where,
      include: { workshop: true },
    });

    if (!workshopJob) throw new RecordNotFoundError(WorkshopJob);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('WorkshopJob', workshopJob),
    );

    return this.prisma.workshopJob.update(args);
  }

  async delete(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: DeleteOneWorkshopJobArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const workshopJob = await this.prisma.workshopJob.findUnique({
      where: args.where,
      include: { workshop: true },
    });

    if (!workshopJob) throw new RecordNotFoundError(WorkshopJob);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('WorkshopJob', workshopJob),
    );

    return await this.prisma.workshopJob
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  async deleteMany(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: DeleteManyWorkshopJobArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const workshopJobs = await this.prisma.workshopJob.findMany({
      where: { AND: [accessibleBy(ability).WorkshopJob, args.where] },
      include: { workshop: true },
    });

    workshopJobs.forEach((workshopJob) => {
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Delete,
        subject('WorkshopJob', workshopJob),
      );
    });

    return this.prisma.workshopJob
      .deleteMany({
        where: { AND: [accessibleBy(ability).WorkshopJob, args.where] },
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
    const [tasks] = await this.prisma.$transaction([
      this.prisma.task.count({
        where: { workshopJobId },
      }),
    ]);

    return {
      tasks,
    };
  }
}
