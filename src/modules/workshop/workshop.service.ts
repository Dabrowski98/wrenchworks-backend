import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  CreateOneWorkshopArgs,
  UpdateOneWorkshopArgs,
  Workshop,
  FindManyWorkshopArgs,
  WorkshopCount,
  WorkshopCreateInput,
  FindUniqueWorkshopArgs,
  DeleteOneWorkshopArgs,
} from './dto';
import { NoDataProvidedForUpdateError } from 'src/common/custom-errors/errors.config';
import { Address } from '../address/dto';
import { WorkshopDetails } from '../workshop-details/dto';
import { ServiceRequest } from '../service-request/dto';
import { Review } from '../review/dto';
import { WorkshopJob } from '../workshop-job/dto';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Customer } from '../customer/dto';
import { Employee } from '../employee/dto';
import { Service } from '../service/dto';
import { JobCategory } from '../job-category/dto';
import { User } from '../user/dto';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { AbilityFactory, Action } from '../ability';
import { ForbiddenError, subject } from '@casl/ability';

@Injectable()
export class WorkshopService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(args: CreateOneWorkshopArgs): Promise<Workshop> {
    return this.prisma.workshop.create(args);
  }

  async update(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: UpdateOneWorkshopArgs,
  ): Promise<Workshop> {
    const ability = this.abilityFactory.defineAbility(currentEntity);
    const workshop = await this.prisma.workshop.findFirst({
      where: { workshopId: args.where.workshopId },
      select: {
        workshopId: true,
        ownerId: true,
      },
    }); 

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Workshop', workshop as any),
    );
    return this.prisma.workshop.update(args);
  }

  async findMany(args?: FindManyWorkshopArgs): Promise<Workshop[]> {
    return this.prisma.workshop.findMany(args || {});
  }

  async findOne(args: FindUniqueWorkshopArgs): Promise<Workshop> {
    const workshop = await this.prisma.workshop.findUnique(args);
    if (!workshop) throw new RecordNotFoundError(Workshop);
    return workshop;
  }

  async delete(
    currentUser: JwtUserPayload,
    args: DeleteOneWorkshopArgs,
  ): Promise<Boolean> {
    const ability = this.abilityFactory.defineAbility(currentUser);
    const workshop = await this.findOne({
      where: { workshopId: args.where.workshopId },
    });

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('Workshop', workshop),
    );
    return await this.prisma.workshop
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  //RESOLVE FIELDS

  async address(workshopId: bigint): Promise<Address | null> {
    return (
      await this.prisma.workshop.findUnique({
        where: { workshopId },
        include: { address: true },
      })
    ).address;
  }

  async customers(workshopId: bigint): Promise<Customer[]> {
    return (
      await this.prisma.workshop.findUnique({
        where: { workshopId },
        include: { customers: true },
      })
    ).customers;
  }

  async employees(workshopId: bigint): Promise<Employee[]> {
    return (
      await this.prisma.workshop.findUnique({
        where: { workshopId },
        include: { employees: true },
      })
    ).employees;
  }

  async reviews(workshopId: bigint): Promise<Review[]> {
    return (
      await this.prisma.workshop.findUnique({
        where: { workshopId },
        include: { reviews: true },
      })
    ).reviews;
  }

  async serviceRequests(workshopId: bigint): Promise<ServiceRequest[]> {
    return (
      await this.prisma.workshop.findUnique({
        where: { workshopId },
        include: { serviceRequests: true },
      })
    ).serviceRequests;
  }

  async services(workshopId: bigint): Promise<Service[]> {
    return (
      await this.prisma.workshop.findUnique({
        where: { workshopId },
        include: { services: true },
      })
    ).services;
  }

  async user(workshopId: bigint): Promise<User> {
    return (
      await this.prisma.workshop.findUnique({
        where: { workshopId },
        include: { user: true },
      })
    ).user;
  }

  async workshopDetails(workshopId: bigint): Promise<WorkshopDetails> {
    return (
      await this.prisma.workshop.findUnique({
        where: { workshopId },
        include: { workshopDetails: true },
      })
    ).workshopDetails;
  }

  async workshopJobs(workshopId: bigint): Promise<WorkshopJob[]> {
    return (
      await this.prisma.workshop.findUnique({
        where: { workshopId },
        include: { workshopJobs: true },
      })
    ).workshopJobs;
  }

  async jobCategories(workshopId: bigint): Promise<JobCategory[]> {
    return (
      await this.prisma.workshop.findUnique({
        where: { workshopId },
        include: { jobCategories: true },
      })
    ).jobCategories;
  }

  async resolveCount(workshopId: bigint): Promise<WorkshopCount> {
    return {
      customers: await this.prisma.customer.count({
        where: { workshopId },
      }),
      employees: await this.prisma.employee.count({
        where: { workshopId },
      }),
      reviews: await this.prisma.review.count({
        where: { workshopId },
      }),
      serviceRequests: await this.prisma.serviceRequest.count({
        where: { workshopId },
      }),
      services: await this.prisma.service.count({
        where: { workshopId },
      }),
      workshopJobs: await this.prisma.workshopJob.count({
        where: { workshopId },
      }),
      jobCategories: await this.prisma.jobCategory.count({
        where: { workshops: { some: { workshopId } } },
      }),
    };
  }
}
