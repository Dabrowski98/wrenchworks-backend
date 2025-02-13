import { Injectable } from '@nestjs/common';
import {
  CreateOneServiceRequestArgs,
  UpdateOneServiceRequestArgs,
  DeleteOneServiceRequestArgs,
  FindUniqueServiceRequestArgs,
  FindManyServiceRequestArgs,
  ServiceRequest,
  ServiceRequestCount,
  DeleteManyServiceRequestArgs,
} from './dto';
import { PrismaService } from 'src/database/prisma.service';
import { Employee } from '../employee/dto';
import { Service } from '../service/dto';
import {
  BadRequestError,
  RecordNotFoundError,
} from 'src/common/custom-errors/errors.config';
import { CreateServiceRequestAsGuestInput } from './custom-dto/create-service-request-as-guest.input';
import { GuestService } from '../guest/guest.service';
import { ServiceService } from '../service/service.service';
import { CustomerCreationSource } from '../prisma/dto/customer-creation-source.enum';
import { ServiceCreateInput } from '../service/dto/service-create.input';
import { CreateOneServiceArgs } from '../service/dto';
import { AcceptServiceRequestInput } from './custom-dto/accept-service-request.input';
import { Job } from '../job/dto';
import { Vehicle } from '../vehicle/dto';
import { Workshop } from '../workshop/dto';
import { Guest } from '../guest/dto';
import { User } from '../user/dto';
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { ForbiddenError, PureAbility, subject } from '@casl/ability';
import { AbilityFactory, Action } from '../ability/ability.factory';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
import { isEmployeePayload } from 'src/common/utils/type-guards';
import { accessibleBy } from '@casl/prisma';
import { CreateServiceRequestAsGuestArgs } from './custom-dto/create-service-request-as-guest.args';
import { AcceptServiceRequestArgs } from './custom-dto/accept-service-request.args';

@Injectable()
export class ServiceRequestService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly serviceService: ServiceService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async createAsUser(
    currentUser: JwtUserPayload,
    args: CreateOneServiceRequestArgs,
  ): Promise<ServiceRequest> {
    const ability = await this.abilityFactory.defineAbility(currentUser);
    const user = await this.prisma.user.findUnique({
      where: { userId: args.data.user.connect.userId },
      select: { userId: true },
    });

    if (!user) throw new RecordNotFoundError(User);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('ServiceRequest', user as any),
    );

    return this.prisma.serviceRequest.create({
      data: {
        ...args.data,
        createdAt: new Date(),
        user: { connect: { userId: user.userId } },
      },
    });
  }

  async createAsGuest(
    args: CreateServiceRequestAsGuestArgs,
  ): Promise<ServiceRequest> {
    const { serviceRequest, guest, vehicle } = args.data;
    return this.prisma.serviceRequest.create({
      data: {
        ...serviceRequest,
        createdAt: new Date(),
        guest: { create: { ...guest } },
        vehicle: { create: { ...vehicle } },
      },
    });
  }

  async accept(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: AcceptServiceRequestArgs,
  ): Promise<ServiceRequest> {
    return this.prisma.$transaction(async (tx) => {
      const {
        serviceRequestId,
        customer,
        tasks,
        serviceDescription,
        serviceStartDate,
        employeeId: responsibleEmployeeId,
      } = args.data;

      const ability = await this.abilityFactory.defineAbility(currentEntity);
      const serviceRequest = await this.prisma.serviceRequest.findUnique({
        where: { serviceRequestId },
        include: {
          workshop: { select: { workshopId: true, ownerId: true } },
        },
      });

      if (!serviceRequest) throw new RecordNotFoundError(ServiceRequest);

      ForbiddenError.from(ability).throwUnlessCan(
        Action.Resolve,
        subject('ServiceRequest', serviceRequest),
      );

      if (serviceRequest.resolvedAt)
        throw new BadRequestError('Service request already resolved');

      const requestFromUser = !!serviceRequest.userId;

      const customerData: CreateOneServiceArgs['data']['customer'] =
        requestFromUser
          ? {
              connectOrCreate: {
                where: {
                  userId_workshopId: {
                    userId: serviceRequest.userId,
                    workshopId: serviceRequest.workshopId,
                  },
                },
                create: {
                  email: customer.email,
                  user: { connect: { userId: serviceRequest.userId } },
                  workshop: {
                    connect: { workshopId: serviceRequest.workshopId },
                  },
                  creationSource: CustomerCreationSource.USER,
                  vehicles: {
                    connect: [{ vehicleId: serviceRequest.vehicleId }],
                  },
                },
              },
            }
          : {
              create: {
                ...customer,
                guest: { connect: { guestId: serviceRequest.guestId } },
                workshop: {
                  connect: { workshopId: serviceRequest.workshopId },
                },
                creationSource: CustomerCreationSource.GUEST,
                vehicles: {
                  connect: [{ vehicleId: serviceRequest.vehicleId }],
                },
              },
            };

      const approvedService = await this.serviceService.create(currentEntity, {
        data: {
          serviceRequestId: serviceRequest.serviceRequestId,
          customer: customerData,
          employee: { connect: { employeeId: responsibleEmployeeId } },
          description: serviceDescription,
          serviceStartDate: serviceStartDate
            ? new Date(serviceStartDate)
            : undefined,
          vehicle: { connect: { vehicleId: serviceRequest.vehicleId } },
          workshop: { connect: { workshopId: serviceRequest.workshopId } },
          tasks: { create: tasks },
        },
      });

      return await tx.serviceRequest.update({
        where: { serviceRequestId },
        data: {
          approvedService: {
            connect: { serviceId: approvedService.serviceId },
          },
          status: 'ACCEPTED',
          resolvedAt: new Date(),
          resolvedBy: isEmployeePayload(currentEntity)
            ? currentEntity.employeeId
            : undefined,
        },
      });
    });
  }

  async reject(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    serviceRequestId: bigint,
  ): Promise<ServiceRequest> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const serviceRequest = await this.prisma.serviceRequest.findUnique({
      where: { serviceRequestId },
      include: {
        workshop: { select: { workshopId: true, ownerId: true } },
      },
    });

    if (!serviceRequest) throw new RecordNotFoundError(ServiceRequest);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Resolve,
      subject('ServiceRequest', serviceRequest),
    );

    if (serviceRequest.resolvedAt)
      throw new BadRequestError('Service request already resolved');

    return this.prisma.serviceRequest.update({
      where: { serviceRequestId },
      data: {
        status: 'REJECTED',
        resolvedAt: new Date(),
        resolvedBy: isEmployeePayload(currentEntity)
          ? currentEntity.employeeId
          : undefined,
      },
    });
  }

  async cancel(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    serviceRequestId: bigint,
  ): Promise<ServiceRequest> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const serviceRequest = await this.prisma.serviceRequest.findUnique({
      where: { serviceRequestId },
      include: {
        workshop: { select: { workshopId: true, ownerId: true } },
      },
    });

    if (!serviceRequest) throw new RecordNotFoundError(ServiceRequest);

    if (serviceRequest.status === 'ACCEPTED')
      throw new BadRequestError(
        'Cannot cancel service request that has been accepted',
      );

    return this.prisma.serviceRequest.update({
      where: { serviceRequestId },
      data: {
        status: 'CANCELLED',
        resolvedAt: new Date(),
        resolvedBy: isEmployeePayload(currentEntity)
          ? currentEntity.employeeId
          : undefined,
      },
    });
  }

  async findOne(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: FindUniqueServiceRequestArgs,
  ): Promise<ServiceRequest> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const serviceRequest = await this.prisma.serviceRequest.findFirst({
      where: { AND: [accessibleBy(ability).ServiceRequest, args.where] },
    });
    if (!serviceRequest) throw new RecordNotFoundError(ServiceRequest);

    return serviceRequest;
  }

  async findMany(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args?: FindManyServiceRequestArgs,
  ): Promise<ServiceRequest[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const serviceRequests = await this.prisma.serviceRequest.findMany({
      where: {
        AND: [accessibleBy(ability).ServiceRequest, args?.where || {}],
      },
      ...args,
    });
    return serviceRequests;
  }

  async update(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: UpdateOneServiceRequestArgs,
  ): Promise<ServiceRequest> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const serviceRequest = await this.prisma.serviceRequest.findFirst({
      where: args.where,
      include: {
        workshop: { select: { workshopId: true, ownerId: true } },
      },
    });

    if (!serviceRequest) throw new RecordNotFoundError(ServiceRequest);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('ServiceRequest', serviceRequest),
    );

    return this.prisma.serviceRequest.update(args);
  }

  async delete(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: DeleteOneServiceRequestArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    const serviceRequest = await this.prisma.serviceRequest.findFirst({
      where: args.where,
      include: {
        workshop: { select: { workshopId: true, ownerId: true } },
      },
    });

    if (!serviceRequest) throw new RecordNotFoundError(ServiceRequest);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('ServiceRequest', serviceRequest),
    );

    if (serviceRequest.status !== 'PENDING')
      throw new BadRequestError(
        'Cannot delete service request that is being processed',
      );

    return this.prisma.serviceRequest
      .delete({ where: args.where })
      .then(() => true)
      .catch(() => false);
  }

  async deleteMany(
    currentEntity: JwtUserPayload | JwtEmployeePayload,
    args: DeleteManyServiceRequestArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const requests = await this.prisma.serviceRequest.findMany({
      where: { AND: [accessibleBy(ability).ServiceRequest, args.where] },
      include: { workshop: { select: { workshopId: true } } },
    });

    requests.forEach((request) => {
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Delete,
        subject('ServiceRequest', request),
      );
    });

    return this.prisma.serviceRequest
      .deleteMany({
        where: { AND: [accessibleBy(ability).ServiceRequest, args.where] },
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async jobs(ability: PureAbility, serviceRequestId: bigint): Promise<Job[]> {
    return await this.prisma.job.findMany({
      where: {
        AND: [
          accessibleBy(ability).Job,
          { serviceRequests: { some: { serviceRequestId } } },
        ],
      },
    });
  }

  async approvedService(
    ability: PureAbility,
    serviceRequestId: bigint,
  ): Promise<Service | null> {
    return (
      (await this.prisma.service.findFirst({
        where: {
          AND: [accessibleBy(ability).Service, { serviceRequestId }],
        },
      })) || null
    );
  }

  async vehicle(
    ability: PureAbility,
    serviceRequestId: bigint,
  ): Promise<Vehicle> {
    return (
      (await this.prisma.vehicle.findFirst({
        where: {
          AND: [
            accessibleBy(ability).Vehicle,
            { serviceRequests: { some: { serviceRequestId } } },
          ],
        },
      })) || null
    );
  }

  async workshop(
    ability: PureAbility,
    serviceRequestId: bigint,
  ): Promise<Workshop> {
    return (
      (await this.prisma.workshop.findFirst({
        where: {
          AND: [
            accessibleBy(ability).Workshop,
            { serviceRequests: { some: { serviceRequestId } } },
          ],
        },
      })) || null
    );
  }

  async user(
    ability: PureAbility,
    serviceRequestId: bigint,
  ): Promise<User | null> {
    return (
      (await this.prisma.user.findFirst({
        where: {
          AND: [
            accessibleBy(ability).User,
            { serviceRequests: { some: { serviceRequestId } } },
          ],
        },
      })) || null
    );
  }

  async guest(
    ability: PureAbility,
    serviceRequestId: bigint,
  ): Promise<Guest | null> {
    return (
      (await this.prisma.guest.findFirst({
        where: {
          AND: [
            accessibleBy(ability).Guest,
            { serviceRequest: { serviceRequestId } },
          ],
        },
      })) || null
    );
  }

  async resolveCount(
    ability: PureAbility,
    serviceRequestId: bigint,
  ): Promise<ServiceRequestCount> {
    const [jobs] = await this.prisma.$transaction([
      this.prisma.job.count({
        where: {
          AND: [
            accessibleBy(ability).Job,
            { serviceRequests: { some: { serviceRequestId } } },
          ],
        },
      }),
    ]);

    return {
      jobs,
    };
  }
}
