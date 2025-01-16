import { Injectable } from '@nestjs/common';
import {
  CreateOneServiceArgs,
  UpdateOneServiceArgs,
  DeleteOneServiceArgs,
  FindUniqueServiceArgs,
  FindManyServiceArgs,
  Service,
  ServiceCount,
} from './dto';
import { PrismaService } from 'src/database/prisma.service';
import { Workshop } from '../workshop/dto/workshop.model';
import { Review } from '../review/dto/review.model';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { ServiceRequest } from '../service-request/dto/service-request.model';
import { Task } from '../task/dto/task.model';
import { Customer } from '../customer/dto/customer.model';
import { Employee } from '../employee/dto/employee.model';
import { Vehicle } from '../vehicle/dto/vehicle.model';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneServiceArgs): Promise<Service> {
    return this.prisma.service.create({
      data: args.data,
    });
  }

  async findOne(args: FindUniqueServiceArgs): Promise<Service> {
    const service = await this.prisma.service.findUnique(args);
    if (!service) throw new RecordNotFoundError(Service);
    return service;
  }

  async findMany(args: FindManyServiceArgs): Promise<Service[]> {
    return this.prisma.service.findMany(args);
  }

  async update(args: UpdateOneServiceArgs): Promise<Service> {
    return this.prisma.service.update({
      where: args.where,
      data: args.data,
    });
  }

  async delete(args: DeleteOneServiceArgs): Promise<boolean> {
    await this.prisma.service.delete({
      where: args.where,
    });
    return true;
  }

  // RESOLVE METHODS

  async serviceRequest(serviceId: bigint): Promise<ServiceRequest | null> {
    return (
      await this.prisma.service.findUnique({
        where: { serviceId },
        include: { serviceRequest: true },
      })
    ).serviceRequest;
  }

  async tasks(serviceId: bigint): Promise<Task[]> {
    return (
      await this.prisma.service.findUnique({
        where: { serviceId },
        include: { tasks: true },
      })
    ).tasks;
  }

  async customer(serviceId: bigint): Promise<Customer | null> {
    return (
      await this.prisma.service.findUnique({
        where: { serviceId },
        include: { customer: true },
      })
    ).customer;
  }

  async employee(serviceId: bigint): Promise<Employee | null> {
    return (
      await this.prisma.service.findUnique({
        where: { serviceId },
        include: { employee: true },
      })
    ).employee;
  }

  async vehicle(serviceId: bigint): Promise<Vehicle | null> {
    return (
      await this.prisma.service.findUnique({
        where: { serviceId },
        include: { vehicle: true },
      })
    ).vehicle;
  }

  async workshop(serviceId: bigint): Promise<Workshop | null> {
    return (
      await this.prisma.service.findUnique({
        where: { serviceId },
        include: { workshop: true },
      })
    ).workshop;
  }

  async resolveCount(serviceId: bigint): Promise<ServiceCount> {
    return {
      tasks: await this.prisma.task.count({ where: { serviceId } }),
    };
  }
}
