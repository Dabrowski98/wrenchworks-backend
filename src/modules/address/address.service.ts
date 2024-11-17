import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { DeletePayload } from 'src/common/payloads/delete.payload';
import {
  Address,
  AddressCount,
  AddressUpdateInput,
  AddressWhereUniqueInput,
  CreateOneAddressArgs,
  DeleteOneAddressArgs,
  UpdateOneAddressArgs,
} from './dto';
import { Person } from '../person/dto';
import { Workshop } from '../workshop';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async createAddress(args: CreateOneAddressArgs): Promise<Address> {
    return this.prisma.address.create(args);
  }

  async updateAddress(args: UpdateOneAddressArgs): Promise<Address> {
    return this.prisma.address.update(args);
  }

  async findAllAddresses(): Promise<Address[]> {
    return this.prisma.address.findMany();
  }

  async findAddressById(addressId: bigint): Promise<Address> {
    const record = await this.prisma.address.findUnique({
      where: { addressId },
    });

    if (!record) throw new RecordNotFoundError(Address);

    return record;
  }

  async deleteAddress(args: DeleteOneAddressArgs): Promise<DeletePayload> {
    const { where } = args;

    await this.prisma.address.delete({
      where: { addressId: where.addressId },
    });

    return { success: true };
  }

  //RESOLVE METHODS

  async persons(addressId: bigint): Promise<Person[]> {
    return (
      await this.prisma.address.findUnique({
        where: { addressId },
        include: { persons: true },
      })
    ).persons;
  }

  async workshops(addressId: bigint): Promise<Workshop[]> {
    return (
      await this.prisma.address.findUnique({
        where: { addressId },
        include: { workshops: true },
      })
    ).workshops;
  }

  async resolveCount(address: Address): Promise<AddressCount> {
    return {
      persons: (await this.persons(address.addressId)).length,
      workshops: (await this.workshops(address.addressId)).length,
    };
  }
}
