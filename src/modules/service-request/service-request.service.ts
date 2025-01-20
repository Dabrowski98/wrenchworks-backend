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
import { Employee } from '../employee/dto/employee.model';
import { Service } from '../service/dto/service.model';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { CreateServiceRequestAsGuestInput } from './custom-dto/create-service-request-as-guest.input';
import { GuestService } from '../guest/guest.service';
import { ServiceService } from '../service/service.service';

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
    serviceRequestId: bigint,
    employeeId: bigint,
  ): Promise<ServiceRequest> {
    return this.prisma.$transaction(async (tx) => {
      const serviceRequest = await this.findOne({
        where: { serviceRequestId },
      });

      serviceRequest.user;

      if (!serviceRequest) throw new RecordNotFoundError(ServiceRequest);

      const service = await this.serviceService.create(
        {
          data: {
            serviceRequestId,
            customer: {
              connectOrCreate: {
                where: { userId: { equals: serviceRequest.userId } },
                create: {
                  user: { connect: { userId: serviceRequest.userId } },
                },
              },
            },
            employee: { connect: { employeeId } },
            vehicle: { connect: { vehicleId: serviceRequest.vehicleId } },
            workshop: { connect: { workshopId: serviceRequest.workshopId } },
          },
        },
        employeeId,
      );

      return await tx.serviceRequest.update({
        where: { serviceRequestId },
        data: {
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
    return this.prisma.serviceRequest.update({});
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
    return this.prisma.serviceRequest.update({
      where: args.where,
      data: args.data,
    });
  }

  async delete(args: DeleteOneServiceRequestArgs): Promise<boolean> {
    await this.prisma.serviceRequest.delete({
      where: args.where,
    });
    return true;
  }

  // RESOLVE METHODS

  async employee(serviceRequestId: bigint): Promise<Employee | null> {
    const serviceRequest = await this.prisma.serviceRequest.findUnique({
      where: { serviceRequestId },
      include: { employee: true },
    });
    return serviceRequest?.employee || null;
  }

  async service(serviceId: bigint): Promise<Service | null> {
    const serviceRequest = await this.prisma.serviceRequest.findUnique({
      where: { serviceId },
      include: { service: true },
    });
    return serviceRequest?.service || null;
  }

  async resolveCount(serviceRequestId: bigint): Promise<ServiceRequestCount> {
    // Example count fields; adjust based on actual relations
    const tasksCount = await this.prisma.task.count({
      where: { serviceRequestId },
    });
    // Add other count fields if necessary

    return {
      tasks: tasksCount,
      // Add additional counts here
    };
  }
}
