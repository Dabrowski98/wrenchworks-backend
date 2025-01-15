import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  CreateOneCustomerArgs,
  FindUniqueCustomerArgs,
  FindManyCustomerArgs,
  UpdateOneCustomerArgs,
  DeleteOneCustomerArgs,
  Customer,
  CustomerCount,
} from './dto';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Vehicle } from '../vehicle/dto/vehicle.model';
import { Service } from '../service/dto/service.model';
import { Guest } from '../guest/dto/guest.model';
import { User } from '../user/dto/user.model';
import { Workshop } from '../workshop/dto/workshop.model';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneCustomerArgs): Promise<Customer> {
    return this.prisma.customer.create({ data: args.data });
  }

  async findOne(args: FindUniqueCustomerArgs): Promise<Customer> {
    const customer = await this.prisma.customer.findUnique(args);
    if (!customer) throw new RecordNotFoundError(Customer);
    return customer;
  }

  async findMany(args: FindManyCustomerArgs): Promise<Customer[]> {
    return this.prisma.customer.findMany(args);
  }

  async update(args: UpdateOneCustomerArgs): Promise<Customer> {
    return this.prisma.customer.update(args);
  }

  async delete(args: DeleteOneCustomerArgs): Promise<boolean> {
    await this.prisma.customer.delete(args);
    return true;
  }

  // RESOLVER METHODS

  async vehicles(customerId: bigint): Promise<Vehicle[]> {
    return (
      await this.prisma.customer.findUnique({
        where: { customerId },
        include: { vehicles: true },
      })
    ).vehicles;
  }

  async services(customerId: bigint): Promise<Service[]> {
    return (
      await this.prisma.customer.findUnique({
        where: { customerId },
        include: { services: true },
      })
    ).services;
  }

  async guest(customerId: bigint): Promise<Guest | null> {
    return (
      await this.prisma.customer.findUnique({
        where: { customerId },
        include: { guest: true },
      })
    ).guest;
  }

  async user(customerId: bigint): Promise<User | null> {
    return (
      await this.prisma.customer.findUnique({
        where: { customerId },
        include: { user: true },
      })
    ).user;
  }

  async workshop(customerId: bigint): Promise<Workshop | null> {
    return (
      await this.prisma.customer.findUnique({
        where: { customerId },
        include: { workshop: true },
      })
    ).workshop;
  }

  async resolveCount(customerId: bigint): Promise<CustomerCount> {
    return {
      services: (await this.services(customerId)).length,
      vehicles: (await this.vehicles(customerId)).length,
    };
  }
}
