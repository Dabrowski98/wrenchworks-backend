import { Injectable } from '@nestjs/common';
import {
  CreateOneServiceArgs,
  UpdateOneServiceArgs,
  DeleteOneServiceArgs,
  FindUniqueServiceArgs,
  FindManyServiceArgs,
  Service,
  ServiceCount,
  DeleteManyServiceArgs,
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
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { ForbiddenError, PureAbility, subject } from '@casl/ability';
import { AbilityFactory, Action } from '../ability/ability.factory';
import { isEmployeePayload } from 'src/common/utils/type-guards';
import { accessibleBy } from '@casl/prisma';
import { CloseOneServiceArgs } from './custom-dto/close-one-service.args';

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
    const workshop = await this.prisma.workshop.findUnique({
      where: { workshopId: args.data.workshop.connect.workshopId },
      select: { workshopId: true, ownerId: true },
    });
    if (!workshop) throw new RecordNotFoundError(Workshop);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Service', { workshop } as any as Service),
    );

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
    const service = await this.prisma.service.findFirst({
      where: { AND: [accessibleBy(ability).Service, args.where] },
    });

    if (!service) throw new RecordNotFoundError(Service);

    return service;
  }

  async findMany(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args?: FindManyServiceArgs,
  ): Promise<Service[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    return this.prisma.service.findMany({
      where: { AND: [accessibleBy(ability).Service, args?.where || {}] },
      ...args,
    });
  }

  async update(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: UpdateOneServiceArgs,
  ): Promise<Service> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const service = await this.prisma.service.findUnique({
      where: args.where,
      include: {
        workshop: { select: { workshopId: true, ownerId: true } },
      },
    });

    if (!service) throw new RecordNotFoundError(Service);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Service', service),
    );

    return this.prisma.service.update(args);
  }

  async delete(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: DeleteOneServiceArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const service = await this.prisma.service.findUnique({
      where: args.where,
      include: {
        workshop: { select: { workshopId: true, ownerId: true } },
      },
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

  async close(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: CloseOneServiceArgs,
  ): Promise<Service> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const service = await this.prisma.service.findUnique({
      where: args.where,
      include: {
        workshop: { select: { workshopId: true, ownerId: true } },
      },
    });

    if (!service) throw new RecordNotFoundError(Service);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Service', service),
    );

    return this.prisma.service.update({
      where: args.where,
      data: {
        ...args.data,
        resolvedAt: new Date(),
        resolvedBy: isEmployeePayload(currentEntity)
          ? currentEntity.employeeId
          : undefined,
      },
    });
  }

  async deleteMany(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: DeleteManyServiceArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const services = await this.prisma.service.findMany({
      where: { AND: [accessibleBy(ability).Service, args.where] },
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    services.forEach((service) => {
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Delete,
        subject('Service', service),
      );
    });

    return this.prisma.service
      .deleteMany({
        where: { AND: [accessibleBy(ability).Service, args.where] },
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async serviceRequest(
    ability: PureAbility,
    serviceId: bigint,
  ): Promise<ServiceRequest | null> {
    return (
      (await this.prisma.serviceRequest.findFirst({
        where: {
          AND: [
            accessibleBy(ability).ServiceRequest,
            { approvedServiceId: serviceId },
          ],
        },
      })) || null
    );
  }

  async tasks(ability: PureAbility, serviceId: bigint): Promise<Task[]> {
    return await this.prisma.task.findMany({
      where: {
        AND: [accessibleBy(ability).Task, { serviceId }],
      },
    });
  }

  async customer(
    ability: PureAbility,
    serviceId: bigint,
  ): Promise<Customer | null> {
    return (
      (await this.prisma.customer.findFirst({
        where: {
          AND: [
            accessibleBy(ability).Customer,
            { services: { some: { serviceId } } },
          ],
        },
      })) || null
    );
  }

  async employee(
    ability: PureAbility,
    serviceId: bigint,
  ): Promise<Employee | null> {
    return (
      (await this.prisma.employee.findFirst({
        where: {
          AND: [
            accessibleBy(ability).Employee,
            { services: { some: { serviceId } } },
          ],
        },
      })) || null
    );
  }

  async vehicle(
    ability: PureAbility,
    serviceId: bigint,
  ): Promise<Vehicle | null> {
    return (
      (await this.prisma.vehicle.findFirst({
        where: {
          AND: [
            accessibleBy(ability).Vehicle,
            { services: { some: { serviceId } } },
          ],
        },
      })) || null
    );
  }

  async workshop(
    ability: PureAbility,
    serviceId: bigint,
  ): Promise<Workshop | null> {
    return (
      (await this.prisma.workshop.findFirst({
        where: {
          AND: [
            accessibleBy(ability).Workshop,
            { services: { some: { serviceId } } },
          ],
        },
      })) || null
    );
  }

  async resolveCount(
    ability: PureAbility,
    serviceId: bigint,
  ): Promise<ServiceCount> {
    const [tasks] = await this.prisma.$transaction([
      this.prisma.task.count({
        where: { AND: [accessibleBy(ability).Task, { serviceId }] },
      }),
    ]);

    return {
      tasks,
    };
  }
}
