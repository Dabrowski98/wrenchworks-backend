import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DeletePayload } from 'src/common/payloads/delete.payload';
import {
  CreateOneWorkshopArgs,
  UpdateOneWorkshopArgs,
  Workshop,
  FindManyWorkshopArgs,
  WorkshopCount,
  WorkshopCreateInput,
  FindUniqueWorkshopArgs,
} from './dto';
import { NoDataProvidedForUpdateError } from 'src/common/custom-errors/errors.config';
import { Address } from '../address/dto';
import { WorkshopDetails } from '../workshop-details';
import { ServiceRequest } from '../service-request';
import { Review } from '../review';
import { WorkshopJob } from '../workshop-job';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Customer } from '../customer/dto';
import { Employee } from '../employee/dto';
import { Service } from '../service';
import { JobCategory } from '../job-category';
import { User } from '../user/dto';

@Injectable()
export class WorkshopService {
  constructor(private readonly prisma: PrismaService) {}

  async createWorkshop(input: WorkshopCreateInput): Promise<Workshop> {
    return this.prisma.workshop.create({ data: input });
  }

  // async updateWorkshop(args: UpdateOneWorkshopArgs): Promise<Workshop> {
  //   const { data, workshopId } = args;
  //   const { personId, address, workshopDetails, ...restData } = data;

  //   return this.prisma.workshop.update({
  //     where: { workshopId },
  //     data: {
  //       ...restData,
  //       ...(address && { address: { update: address } }),
  //       ...(personId && { person: { connect: { personId } } }),
  //       ...(workshopDetails && {
  //         workshopDetails: { update: workshopDetails },
  //       }),
  //     },
  //   });
  // }

  async findAllWorkshops(args: FindManyWorkshopArgs): Promise<Workshop[]> {
    return this.prisma.workshop.findMany(args);
  }

  async findWorkshop(args: FindUniqueWorkshopArgs) {
    const workshop = await this.prisma.workshop.findUnique(args);

    if (!workshop) throw new RecordNotFoundError(Workshop);

    return workshop;
  }

  async deleteWorkshop(workshopId: bigint): Promise<DeletePayload> {
    await this.prisma.workshop.existsOrThrow({
      where: { workshopId },
    });

    await this.prisma.workshop.delete({
      where: { workshopId },
    });

    return { success: true };
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
      customers: (await this.customers(workshopId)).length,
      employees: (await this.employees(workshopId)).length,
      reviews: (await this.reviews(workshopId)).length,
      serviceRequests: (await this.serviceRequests(workshopId)).length,
      services: (await this.services(workshopId)).length,
      workshopJobs: (await this.workshopJobs(workshopId)).length,
      jobCategories: (await this.jobCategories(workshopId)).length,
    };
  }
}
