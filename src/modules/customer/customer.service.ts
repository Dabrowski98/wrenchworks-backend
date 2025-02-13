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
  DeleteManyCustomerArgs,
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
import { JwtUserPayload } from '../auth/user-auth/custom-dto/jwt-user-payload';
import { JwtEmployeePayload } from '../auth/employee-auth/custom-dto/jwt-employee-payload';
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
    const workshop = await this.prisma.workshop.findUnique({
      where: { workshopId: args.data.workshop.connect.workshopId },
    });
    if (!workshop) throw new RecordNotFoundError(Workshop);

    ForbiddenError.from(ability).throwUnlessCan(
      Action.Create,
      subject('Customer', { workshop } as any as Customer),
    );

    return this.prisma.customer.create({ data: args.data });
  }

  async findOne(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: FindUniqueCustomerArgs,
  ): Promise<Customer> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const customer = await this.prisma.customer.findFirst({
      where: { AND: [accessibleBy(ability).Customer, args.where] },
    });
    if (!customer) throw new RecordNotFoundError(Customer);

    return customer;
  }

  async findMany(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args?: FindManyCustomerArgs,
  ): Promise<Customer[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    return this.prisma.customer.findMany({
      where: {
        AND: [accessibleBy(ability).Customer, args?.where || {}],
      },
      ...args,
    });
  }

  async update(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: UpdateOneCustomerArgs,
  ): Promise<Customer> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const customer = await this.prisma.customer.findUnique({
      where: args.where,
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });
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
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
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

  async deleteMany(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    args: DeleteManyCustomerArgs,
  ): Promise<boolean> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);

    const customers = await this.prisma.customer.findMany({
      where: { AND: [accessibleBy(ability).Customer, args.where] },
      include: { workshop: { select: { workshopId: true, ownerId: true } } },
    });

    customers.forEach((customer) => {
      ForbiddenError.from(ability).throwUnlessCan(
        Action.Delete,
        subject('Customer', customer),
      );
    });

    return this.prisma.customer
      .deleteMany({
        where: { AND: [accessibleBy(ability).Customer, args.where] },
      })
      .then(() => true)
      .catch(() => false);
  }

  // RESOLVER METHODS

  async services(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    customerId: bigint,
  ): Promise<Service[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    return await this.prisma.service.findMany({
      where: {
        AND: [accessibleBy(ability).Service, { customerId }],
      },
    });
  }

  async guest(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    customerId: bigint,
  ): Promise<Guest | null> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    return await this.prisma.guest.findFirst({
      where: {
        AND: [accessibleBy(ability).Guest, { customer: { customerId } }],
      },
    });
  }

  async user(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    customerId: bigint,
  ): Promise<User | null> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    return await this.prisma.user.findFirst({
      where: {
        AND: [
          accessibleBy(ability).User,
          { customers: { some: { customerId } } },
        ],
      },
    });
  }

  async vehicles(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    customerId: bigint,
  ): Promise<Vehicle[]> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    return await this.prisma.vehicle.findMany({
      where: {
        AND: [accessibleBy(ability).Vehicle, { customerId }],
      },
    });
  }

  async workshop(
    currentEntity: JwtEmployeePayload | JwtUserPayload,
    customerId: bigint,
  ): Promise<Workshop | null> {
    const ability = await this.abilityFactory.defineAbility(currentEntity);
    return await this.prisma.workshop.findFirst({
      where: {
        AND: [
          accessibleBy(ability).Workshop,
          { customers: { some: { customerId } } },
        ],
      },
    });
  }

  async resolveCount(customerId: bigint): Promise<CustomerCount> {
    const counts = await this.prisma.$transaction([
      this.prisma.service.count({ where: { customerId } }),
      this.prisma.vehicle.count({ where: { customerId } }),
    ]);

    const [services, vehicles] = counts;

    return {
      services,
      vehicles,
    };
  }
}
