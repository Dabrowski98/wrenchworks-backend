import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import {
  CreateOnePersonArgs,
  UpdateOnePersonArgs,
  Person,
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
import { HelperService } from 'src/common/helper/helper.service';

@Injectable()
export class PersonService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly helperService: HelperService
  ) {helperService.setModelName(Person);}

  async createPerson(args: CreateOnePersonArgs): Promise<Person> {
    return this.prisma.person.create(args);
  }

  async updatePerson(args: UpdateOnePersonArgs): Promise<Person> {
    const { data, where } = args;
    return this.prisma.person.update({
      where: { personId: where.personId },
      data,
    });
  }

  async softDeletePerson(personId: bigint): Promise<Person> {
    return this.prisma.person.update({
      where: { personId },
      data: { deletedAt: new Date() },
    });
  }

  async recoverPerson(personId: bigint): Promise<Person> {
    const person = await this.prisma.person.findUnique({ where: { personId } });
    
    
    const isSoftDeleted = await this.helperService.isSoftDeleted(person);

    if (!isSoftDeleted) {
      throw new Error('Record is not soft-deleted and cannot be recovered.');
    }

    return this.prisma.person.update({
      where: { personId },
      data: { deletedAt: null },
    });
  }

  async deletePerson(personId: bigint): Promise<DeletePayload> {
    const person = await this.prisma.person.findUnique({ where: { personId } });

    const isSoftDeleted = await this.helperService.isSoftDeleted(person);

    if (!isSoftDeleted) {
      throw new Error('Record is not soft-deleted and cannot be permanently deleted.');
    }

    await this.prisma.person.delete({
      where: { personId },
    });

    return { success: true };
  }

  async findAllPersons(): Promise<Person[]> {
    return this.prisma.person.findMany();
  }

  async findPersonById(personId: bigint): Promise<Person> {
    const record = await this.prisma.person.findUnique({
      where: { personId },
    });
    if (!record) throw new RecordNotFoundError();
    return record;
  }

  // RESOLVE METHODS

  async resolveAddresses(personId: bigint): Promise<Address[]> {
    return this.prisma.person.findUnique({ where: { personId } }).addresses();
  }

  async resolveCustomers(personId: bigint): Promise<Customer[]> {
    return this.prisma.person.findUnique({ where: { personId } }).customers();
  }

  async resolveEmployees(personId: bigint): Promise<Employee[]> {
    return this.prisma.person.findUnique({ where: { personId } }).employees();
  }

  async resolveServiceRequests(personId: bigint): Promise<ServiceRequest[]> {
    return this.prisma.person.findUnique({ where: { personId } }).serviceRequests();
  }

  async resolveUser(personId: bigint): Promise<User> {
    return this.prisma.person.findUnique({ where: { personId } }).user();
  }

  async resolveVehicles(personId: bigint): Promise<Vehicle[]> {
    return this.prisma.person.findUnique({ where: { personId } }).vehicles();
  }

  async resolveWorkshops(personId: bigint): Promise<Workshop[]> {
    return this.prisma.person.findUnique({ where: { personId } }).workshops();
  }
}
