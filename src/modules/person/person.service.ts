import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  CreateOnePersonArgs,
  UpdateOnePersonArgs,
  Person,
  PersonCount,
} from 'src/@generated/person';
import { DeletePayload } from 'src/common/payloads/delete.payload';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { Address } from 'src/@generated/address';
import { Customer } from 'src/@generated/customer';
import { Employee } from 'src/@generated/employee';
import { ServiceRequest } from 'src/@generated/service-request';
import { User } from 'src/@generated/user';
import { Vehicle } from 'src/@generated/vehicle';
import { Workshop } from 'src/@generated/workshop';

@Injectable()
export class PersonService {
  constructor(private readonly prisma: PrismaService) {}

  async createPerson(args: CreateOnePersonArgs): Promise<Person> {
    return this.prisma.person.create(args);
  }

  async updatePerson(args: UpdateOnePersonArgs): Promise<Person> {
    const { data, where } = args;
    await this.prisma.person.existsOrThrow({ where });

    return this.prisma.person.update({
      where: { personId: where.personId },
      data,
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
