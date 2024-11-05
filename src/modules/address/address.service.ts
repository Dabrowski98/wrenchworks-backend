import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import {
  Address,
  CreateOneAddressArgs,
  DeleteOneAddressArgs,
  FindUniqueAddressArgs,
  UpdateOneAddressArgs,
} from 'src/@generated/address';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { DeletePayload } from 'src/common/payloads/delete.payload';
import { Person } from 'src/@generated/person';
import { Workshop } from 'src/@generated/workshop';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: DatabaseService) {}

  async createAddress(args: CreateOneAddressArgs): Promise<Address> {
    return this.prisma.address.create(args);
  }

  async updateAddress(args: UpdateOneAddressArgs): Promise<Address> {
    const { data, where } = args;
    return this.prisma.address.update({
      where: { addressId: where.addressId },
      data,
    });
  }

  async deleteAddress(args: DeleteOneAddressArgs): Promise<DeletePayload> {
    const { where } = args;

    await this.prisma.address.delete({
      where: { addressId: where.addressId },
    });

    return { success: true, error: 'null' };
  }

  async findAllAddresses(): Promise<Address[]> {
    return this.prisma.address.findMany();
  }

  async findAddressById(args: FindUniqueAddressArgs): Promise<Address> {
    const { where } = args;

    const record = await this.prisma.address.findUnique({
      where: { addressId: where.addressId },
    });

    if (!record) throw new RecordNotFoundError();

    return record;
  }

  //RESOLVE METHODS

  async resolvePersons(addressId: bigint): Promise<Person[]> {
    return this.prisma.address.findUnique({ where: { addressId } }).persons();
  }

  async resolveWorkshops(addressId: bigint): Promise<Workshop[]> {
    return this.prisma.address.findUnique({ where: { addressId } }).workshops();
  }
}
