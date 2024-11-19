import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DeletePayload } from 'src/common/payloads/delete.payload';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import {
  CreateOnePersonArgs,
  Person,
  PersonCount,
  UpdateOnePersonArgs,
} from './dto';
import { Address } from '../address/dto';
import { Customer } from '../customer';
import { Employee } from '../employee';
import { ServiceRequest } from '../service-request';
import { User } from '../user';
import { Vehicle } from '../vehicle';
import { Workshop } from '../workshop';

@Injectable()
export class PersonService {
  constructor(private readonly prisma: PrismaService) {}

  async createPerson(args: CreateOnePersonArgs): Promise<Person> {
    const { address, vehicles, serviceRequests, ...restData } = args.data;

    return this.prisma.person.create({
      data: {
        ...restData,
        ...(address && { address: { create: address.create } }),
        ...(serviceRequests && {
          serviceRequests: { createMany: serviceRequests },
        }),
        ...(vehicles && {
          vehicles: { createMany: vehicles },
        }),
      },
    });
  }

  async updatePerson(args: UpdateOnePersonArgs): Promise<Person> {
    const { data, personId } = args;
    const { address, ...restData } = data;

    return this.prisma.person.update({
      where: { personId },
      data: {
        ...restData,
        ...(address && { address: { update: address } }),
      },
    });
  }

  async findAllPersons(): Promise<Person[]> {
    return this.prisma.person.findMany();
  }

  async findPersonById(personId: bigint): Promise<Person> {
    const person = await this.prisma.person.findUnique({ where: { personId } });
    if (!person) throw new RecordNotFoundError(Person);

    return person;
  }

  async deletePerson(personId: bigint): Promise<DeletePayload> {
    await this.prisma.person.existsOrThrow({ where: { personId } });

    await this.prisma.person.delete({
      where: { personId },
    });

    return { success: true };
  }

  // RESOLVE METHODS

  async address(personId: bigint): Promise<Address | null> {
    return (
      await this.prisma.person.findUnique({
        where: { personId },
        include: { address: true },
      })
    ).address;
  }

  async customers(personId: bigint): Promise<Customer[]> {
    return (
      await this.prisma.person.findUnique({
        where: { personId },
        include: { customers: true },
      })
    ).customers;
  }

  async employees(personId: bigint): Promise<Employee[]> {
    return (
      await this.prisma.person.findUnique({
        where: { personId },
        include: { employees: true },
      })
    ).employees;
  }

  async serviceRequests(personId: bigint): Promise<ServiceRequest[]> {
    return (
      await this.prisma.person.findUnique({
        where: { personId },
        include: { serviceRequests: true },
      })
    ).serviceRequests;
  }

  async user(personId: bigint): Promise<User | null> {
    return (
      await this.prisma.person.findUnique({
        where: { personId },
        include: { user: true },
      })
    ).user;
  }

  async vehicles(personId: bigint): Promise<Vehicle[]> {
    return (
      await this.prisma.person.findUnique({
        where: { personId },
        include: { vehicles: true },
      })
    ).vehicles;
  }

  async workshops(personId: bigint): Promise<Workshop[]> {
    return (
      await this.prisma.person.findUnique({
        where: { personId },
        include: { workshops: true },
      })
    ).workshops;
  }

  async resolveCount(personId: bigint): Promise<PersonCount> {
    return {
      vehicles: (await this.vehicles(personId)).length,
      serviceRequests: (await this.serviceRequests(personId)).length,
      workshops: (await this.workshops(personId)).length,
      customers: (await this.customers(personId)).length,
      employees: (await this.employees(personId)).length,
    };
  }
}
