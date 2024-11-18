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
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async createPerson(args: CreateOnePersonArgs): Promise<Person> {
    let existingAddress: Address | undefined;

    existingAddress = args.data.address
      ? await this.prisma.address.findFirst({
          where: {
            city: args.data.address.createOrConnect.city,
            country: args.data.address.createOrConnect.country,
            region: args.data.address.createOrConnect.region,
            buildingNo: args.data.address.createOrConnect.buildingNo,
            postCode: args.data.address.createOrConnect.postCode,
            street: args.data.address.createOrConnect.street || null,
            flatNo: args.data.address.createOrConnect.flatNo || null,
          },
        })
      : null;

    return this.prisma.person.create({
      data: {
        ...args.data,
        address: existingAddress
          ? { connect: { addressId: existingAddress.addressId } }
          : { create: args.data.address.createOrConnect },
        serviceRequests: args.data.serviceRequests
          ? {
              createMany: args.data.serviceRequests,
            }
          : undefined,
        vehicles: args.data.vehicles
          ? {
              createMany: args.data.vehicles,
            }
          : undefined,
      },
    });
  }

  async updatePerson(args: UpdateOnePersonArgs): Promise<Person> {
    await this.prisma.person.existsOrThrow({
      where: { personId: args.personId },
    });

    return this.prisma.person.update({
      where: { personId: args.personId },
      data: {
        ...args.data,
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
