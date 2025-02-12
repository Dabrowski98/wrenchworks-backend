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
import { Prisma } from '@prisma/client';
import { JwtUserPayload } from '../auth/user-auth/dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/dto/jwt-employee-payload';
import { ForbiddenError, subject } from '@casl/ability';
import { AbilityFactory, Action } from '../ability/ability.factory';
import { isEmployeePayload } from 'src/common/utils/type-guards';
import { accessibleBy } from '@casl/prisma';

@Injectable()
export class ServiceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: CreateOneServiceArgs,
  ): Promise<Service> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Service', {
        workshopId: args.data.workshop.connect.workshopId,
      } as any),
    );

    const workshop = await this.prisma.workshop.findUnique({
      where: { workshopId: args.data.workshop.connect.workshopId },
    });

    if (!workshop) throw new RecordNotFoundError(Workshop);

    return this.prisma.service.create({
      data: {
        ...args.data,
        addedAt: new Date(),
        addedBy: isEmployeePayload(currentEntity)
          ? currentEntity.employeeId
          : undefined,
      },
    });
  }

  async findOne(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: FindUniqueServiceArgs,
  ): Promise<Service> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const service = await this.prisma.service.findUnique(args);

    if (!service) throw new RecordNotFoundError(Service);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Read,
      subject('Service', service),
    );
    return service;
  }

  async findMany(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args?: FindManyServiceArgs,
  ): Promise<Service[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    return this.prisma.service.findMany({
      where: { AND: [accessibleBy(ability).Service, args?.where || {}] },
    });
  }

  async update(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: UpdateOneServiceArgs,
  ): Promise<Service> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const service = await this.prisma.service.findUnique({
      where: args.where,
    });

    if (!service) throw new RecordNotFoundError(Service);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Service', service),
    );

    return this.prisma.service.update(args);
  }

  async changeEmployee(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    serviceId: bigint,
    employeeId: bigint,
  ): Promise<Service> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const service = await this.prisma.service.findUnique({
      where: { serviceId },
    });

    if (!service) throw new RecordNotFoundError(Service);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Service', service),
    );

    return this.prisma.service.update({
      where: { serviceId },
      data: { employeeId },
    });
  }

  async delete(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: DeleteOneServiceArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const service = await this.prisma.service.findUnique({
      where: args.where,
    });

    if (!service) throw new RecordNotFoundError(Service);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('Service', service),
    );

    return this.prisma.service
      .delete(args)
      .then(() => true)
      .catch(() => false);
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
