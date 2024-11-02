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
import { AddressPerson } from 'src/@generated/address-person';
import { AddressWorkshop } from 'src/@generated/address-workshop';

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

  async resolveAddressPersons(addressId: bigint): Promise<AddressPerson[]> {
    return this.prisma.addressPerson.findMany({
      where: { addressId: addressId },
    });
  }
  async resolveAddressWorkshops(addressId: bigint): Promise<AddressWorkshop[]> {
    return this.prisma.addressWorkshop.findMany({
      where: { addressId: addressId },
    });
  }
}
