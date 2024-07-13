import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { isSoftDeleted } from 'src/common/helper/softdeletion';
import { Customer } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private databaseService: DatabaseService) {}

  async createCustomer(data: CreateCustomerInput): Promise<Customer> {
    return this.databaseService.customer.create({
      data,
      include: {
        person: true,
        workshop: true,
      },
    });
  }

  async findCustomers() {
    return this.databaseService.customer.findMany();
  }

  async findCustomerById(customerId: bigint, workshopId: bigint) {
    const customer = await this.databaseService.customer.findUnique({
      where: {
        customerId_workshopId: { customerId, workshopId },
        deletedAt: null,
      },
      include: {
        person: true,
        workshop: true,
      },
    });

    if (!customer) {
      throw new NotFoundException(
        `Customer with id ${customerId} of Workshop with id ${workshopId} not found`,
      );
    }

    return customer;
  }

  // async updateCustomer(id: bigint, data: UpdateCustomerInput) {
  //   await this.findCustomerById(id);
  //   return this.databaseService.customer.update({
  //     where: { customerId: id },
  //     data,
  //   });
  // }

  // async deleteCustomer(id: bigint) {
  //   await this.findCustomerById(id);
  //   return this.databaseService.customer.update({
  //     where: {
  //       customerId: id,
  //       deletedAt: null,
  //     },
  //     data: {
  //       deletedAt: new Date(),
  //     },
  //   });
  // }

  // async destroyCustomer(id: bigint) {
  //   await this.isDestroyable({ id });
  //   return this.databaseService.customer.delete({ where: { customerId: id } });
  // }

  // async retrieveCustomer(id: bigint) {
  //   await this.isRetrievable({ id });

  //   return this.databaseService.customer.update({
  //     data: { deletedAt: null },
  //     where: { customerId: id },
  //   });
  // }

  // async isDestroyable(where: Record<string, any>) {
  //   await isSoftDeleted(where, 'customer', 'delete');
  // }

  // async isRetrievable(where: Record<string, any>) {
  //   await isSoftDeleted(where, 'customer', 'retrieve');
  // }
}
