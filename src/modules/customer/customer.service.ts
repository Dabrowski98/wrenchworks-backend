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
import { ForbiddenError } from '@casl/ability';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Vehicle } from '../vehicle/dto/vehicle.model';
import { Service } from '../service/dto/service.model';
import { Guest } from '../guest/dto/guest.model';
import { User } from '../user/dto/user.model';
import { Workshop } from '../workshop/dto/workshop.model';
import { Action } from '../ability';
import { AbilityFactory } from '../ability';
import { subject } from '@casl/ability';
import { JwtUserPayload } from '../auth/user-auth/dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/dto';
import { accessibleBy } from '@casl/prisma';

@Injectable()
export class CustomerService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abilityFactory: AbilityFactory,
  ) {}

  async create(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: CreateOneCustomerArgs,
  ): Promise<Customer> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Customer', {
        workshopId: args.data.workshop.connect.workshopId,
      } as any as Customer),
    );

    return this.prisma.customer.create({ data: args.data });
  }

  async findOne(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: FindUniqueCustomerArgs,
  ): Promise<Customer> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const customer = await this.prisma.customer.findUnique(args);
    if (!customer) throw new RecordNotFoundError(Customer);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Read,
      subject('Customer', customer),
    );

    return customer;
  }

  async findMany(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: FindManyCustomerArgs,
  ): Promise<Customer[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    return this.prisma.customer.findMany({
      where: {
        AND: [accessibleBy(ability).Customer, args.where],
      },
    });
  }

  async update(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: UpdateOneCustomerArgs,
  ): Promise<Customer> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const customer = await this.prisma.customer.findUnique(args);
    if (!customer) throw new RecordNotFoundError(Customer);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Update,
      subject('Customer', customer),
    );

    return this.prisma.customer.update(args);
  }

  async delete(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    customerId: bigint,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const customer = await this.prisma.customer.findUnique({
      where: { customerId },
    });
    if (!customer) throw new RecordNotFoundError(Customer);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Delete,
      subject('Customer', customer),
    );

    return this.prisma.customer
      .delete({
        where: { customerId },
      })
      .then(() => true)
      .catch(() => false);
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
      services: await this.prisma.service.count({ where: { customerId } }),
      vehicles: await this.prisma.vehicle.count({
        where: { customers: { some: { customerId } } },
      }),
    };
  }
}
