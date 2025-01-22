import { Injectable } from '@nestjs/common';
import {
  CreateOneServiceRequestArgs,
  UpdateOneServiceRequestArgs,
  DeleteOneServiceRequestArgs,
  FindUniqueServiceRequestArgs,
  FindManyServiceRequestArgs,
  ServiceRequest,
  ServiceRequestCount,
} from './dto';
import { PrismaService } from 'src/database/prisma.service';
import { Employee } from '../employee/dto';
import { Service } from '../service/dto';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
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

@Injectable()
export class ServiceRequestService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly serviceService: ServiceService,
  ) {}

  async createAsUser(
    args: CreateOneServiceRequestArgs,
    userId: bigint,
  ): Promise<ServiceRequest> {
    return this.prisma.serviceRequest.create({
      data: {
        ...args.data,
        createdAt: new Date(),
        user: { connect: { userId } },
      },
    });
  }

  async createAsGuest(
    args: CreateServiceRequestAsGuestInput,
  ): Promise<ServiceRequest> {
    return this.prisma.serviceRequest.create({
      data: {
        ...args.serviceRequest,
        createdAt: new Date(),
        guest: { create: { ...args.guest } },
        vehicle: { create: { ...args.vehicle } },
      },
    });
  }

  async accept(
    args: AcceptServiceRequestInput,
    employeeId: bigint,
  ): Promise<ServiceRequest> {
    const {
      serviceRequestId,
      customer,
      tasks,
      serviceDescription,
      serviceStartDate,
      employeeId: responsibleEmployeeId,
    } = args;

    return this.prisma.$transaction(async (tx) => {
      const serviceRequest = await this.findOne({
        where: { serviceRequestId },
      });
      if (!serviceRequest) throw new RecordNotFoundError(ServiceRequest);

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

      const approvedService = await this.serviceService.create(
        {
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
        },
        employeeId,
      );

      return await tx.serviceRequest.update({
        where: { serviceRequestId },
        data: {
          approvedService: {
            connect: { serviceId: approvedService.serviceId },
          },
          status: 'ACCEPTED',
          resolvedAt: new Date(),
          resolvedBy: employeeId,
        },
      });
    });
  }

  async reject(
    serviceRequestId: bigint,
    employeeId: bigint,
  ): Promise<ServiceRequest> {
    return this.prisma.serviceRequest.update({
      where: { serviceRequestId },
      data: {
        status: 'REJECTED',
        resolvedAt: new Date(),
        resolvedBy: employeeId,
      },
    });
  }

  async findOne(args: FindUniqueServiceRequestArgs): Promise<ServiceRequest> {
    const serviceRequest = await this.prisma.serviceRequest.findUnique(args);
    if (!serviceRequest) throw new RecordNotFoundError(ServiceRequest);
    return serviceRequest;
  }

  async findMany(args: FindManyServiceRequestArgs): Promise<ServiceRequest[]> {
    return this.prisma.serviceRequest.findMany(args);
  }

  async update(args: UpdateOneServiceRequestArgs): Promise<ServiceRequest> {
    return this.prisma.serviceRequest.update(args);
  }

  async delete(args: DeleteOneServiceRequestArgs): Promise<boolean> {
    return this.prisma.serviceRequest
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async jobs(serviceRequestId: bigint): Promise<Job[]> {
    return (
      await this.prisma.serviceRequest.findUnique({
        where: { serviceRequestId },
        include: { jobs: true },
      })
    ).jobs;
  }

  async approvedService(serviceRequestId: bigint): Promise<Service | null> {
    return (
      await this.prisma.serviceRequest.findUnique({
        where: { serviceRequestId },
        include: { approvedService: true },
      })
    ).approvedService;
  }

  async vehicle(serviceRequestId: bigint): Promise<Vehicle> {
    return (
      await this.prisma.serviceRequest.findUnique({
        where: { serviceRequestId },
        include: { vehicle: true },
      })
    ).vehicle;
  }

  async workshop(serviceRequestId: bigint): Promise<Workshop> {
    return (
      await this.prisma.serviceRequest.findUnique({
        where: { serviceRequestId },
        include: { workshop: true },
      })
    ).workshop;
  }

  async user(serviceRequestId: bigint): Promise<User | null> {
    return (
      await this.prisma.serviceRequest.findUnique({
        where: { serviceRequestId },
        include: { user: true },
      })
    ).user;
  }

  async guest(serviceRequestId: bigint): Promise<Guest | null> {
    return (
      await this.prisma.serviceRequest.findUnique({
        where: { serviceRequestId },
        include: { guest: true },
      })
    ).guest;
  }

  async resolveCount(serviceRequestId: bigint): Promise<ServiceRequestCount> {
    return {
      jobs: await this.prisma.job.count({
        where: { serviceRequests: { some: { serviceRequestId } } },
      }),
    };
  }
}
