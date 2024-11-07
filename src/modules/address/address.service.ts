import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';
import { DeletePayload } from 'src/common/payloads/delete.payload';
import { Address } from './dto/generated/address.model';
import { Person } from '../person/dto/generated/person.model';
import { Workshop } from '../workshop/dto/generated/workshop.model';
import { AddressCount } from './dto/generated/address-count.output';


@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

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

  async workshop(addressId: bigint): Promise<Workshop> {
    return (
      await this.prisma.address.findUnique({
        where: { addressId },
        include: { workshop: true },
      })
    ).workshop;
  }

  async resolveCount(address: Address): Promise<AddressCount> {
    return {
      persons: (await this.persons(address.addressId)).length,
    };
  }
}
