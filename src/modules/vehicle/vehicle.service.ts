import { PrismaService } from 'src/database/prisma.service';
import { Employee } from '../employee/dto/employee.model';
import { Service } from '../service/dto/service.model';
import {
  BadRequestError,
  RecordNotFoundError,
} from 'src/common/custom-errors/errors.config';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../user/dto';
import {
  CreateOneVehicleArgs,
  DeleteOneVehicleArgs,
  FindManyVehicleArgs,
  FindUniqueVehicleArgs,
  UpdateOneVehicleArgs,
  Vehicle,
  VehicleCount,
} from './dto';
import { Guest } from '../guest/dto';
import { ServiceRequest } from '../service-request/dto';
import { VehicleModel } from '../vehicle-model/dto';
import { Customer } from '../customer/dto';
import { VehicleDetails } from '../vehicle-details/dto';

@Injectable()
export class VehicleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneVehicleArgs, userId: bigint): Promise<Vehicle> {
    return this.prisma.vehicle.create({
      data: {
        ...args.data,
        user: { connect: { userId } },
      },
    });
  }

  async findOne(args: FindUniqueVehicleArgs): Promise<Vehicle> {
    const vehicle = await this.prisma.vehicle.findUnique(args);
    if (!vehicle) throw new RecordNotFoundError(Vehicle);
    return vehicle;
  }

  async findMany(args: FindManyVehicleArgs): Promise<Vehicle[]> {
    return this.prisma.vehicle.findMany(args);
  }

  async update(args: UpdateOneVehicleArgs): Promise<Vehicle> {
    return this.prisma.vehicle.update({
      data: { ...args.data },
      where: args.where,
    });
  }

  async delete(args: DeleteOneVehicleArgs): Promise<boolean> {
    return await this.prisma.vehicle
      .delete({
        where: args.where,
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVE METHODS

  async serviceRequests(vehicleId: bigint): Promise<ServiceRequest[]> {
    return (
      await this.prisma.vehicle.findUnique({
        where: { vehicleId },
        include: { serviceRequests: true },
      })
    ).serviceRequests;
  }

  async services(vehicleId: bigint): Promise<Service[]> {
    return (
      await this.prisma.vehicle.findUnique({
        where: { vehicleId },
        include: { services: true },
      })
    ).services;
  }

  async vehicleModel(vehicleId: bigint): Promise<VehicleModel> {
    return (
      await this.prisma.vehicle.findUnique({
        where: { vehicleId },
        include: { vehicleModel: true },
      })
    ).vehicleModel;
  }

  async user(vehicleId: bigint): Promise<User | null> {
    return (
      await this.prisma.vehicle.findUnique({
        where: { vehicleId },
        include: { user: true },
      })
    ).user;
  }

  async customers(vehicleId: bigint): Promise<Customer[]> {
    return (
      await this.prisma.vehicle.findUnique({
        where: { vehicleId },
        include: { customers: true },
      })
    ).customers;
  }

  async guest(vehicleId: bigint): Promise<Guest | null> {
    return (
      await this.prisma.vehicle.findUnique({
        where: { vehicleId },
        include: { guest: true },
      })
    ).guest;
  }

  async vehicleDetails(vehicleId: bigint): Promise<VehicleDetails | null> {
    return (
      await this.prisma.vehicle.findUnique({
        where: { vehicleId },
        include: { vehicleDetails: true },
      })
    ).vehicleDetails;
  }

  async resolveCount(vehicleId: bigint): Promise<VehicleCount> {
    return {
      customers: await this.prisma.customer.count({
        where: { vehicles: { some: { vehicleId } } },
      }),
      serviceRequests: await this.prisma.serviceRequest.count({
        where: { vehicleId },
      }),
      services: await this.prisma.service.count({
        where: { vehicleId },
      }),
    };
  }
}
